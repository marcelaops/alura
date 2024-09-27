import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PedidoEntity } from './pedido.entity';
import { UsuarioEntity } from '../usuario/usuario.entity';
import { Repository, In } from 'typeorm';
import { StatusPedido } from './enum/statuspedido.enum';
import { CriaPedidoDTO } from './dto/CriaPedido.dto';
import { ItemPedidoEntity } from './itempedido.entity';
import { ProdutoEntity } from '../produto/produto.entity';
import { AtualizaPedidoDto } from './dto/AtualizaPedido.dto';

@Injectable()
export class PedidoService {

  constructor(
    @InjectRepository(PedidoEntity)
    private readonly pedidoRepository: Repository<PedidoEntity>,
    @InjectRepository(UsuarioEntity)
    private readonly usuarioRepository: Repository<UsuarioEntity>,
    @InjectRepository(ProdutoEntity)
    private readonly produtoRepository: Repository<ProdutoEntity>,
  ) { }

  private async buscaUsuario(id) {
    // findOneBy - vai ser reponsavel p achar dentro da tabela
    const usuario = await this.usuarioRepository.findOneBy({ id });
    
    if(usuario == null) throw new NotFoundException('o usuario não foi encontrado.');

    return usuario;
  }

  private trataDadosDoPedido(dadosDoPedido: CriaPedidoDTO, produtosRelacionados: ProdutoEntity[]) {
    dadosDoPedido.itensPedido.forEach((itemPedido) => {
      const produtoRelacionado = produtosRelacionados.find((produto) => produto.id === itemPedido.produtoId);
        
      if(produtoRelacionado == undefined) throw new NotFoundException(`o produto com id ${itemPedido.produtoId} não foi encontrado`);

      if(itemPedido.quantidade > produtoRelacionado.quantidadeDisponivel) throw new BadRequestException(`a quantidade solicitada de ${itemPedido.quantidade} é maior que a disponível de ${produtoRelacionado.quantidadeDisponivel} para o produto ${produtoRelacionado.nome}`);
    });
  }

  async cadastraPedido(usuarioId: string, dadosDoPedido: CriaPedidoDTO) {
    const usuario = await this.buscaUsuario(usuarioId);
    const produtosIds = dadosDoPedido.itensPedido.map((itemPedido) => itemPedido.produtoId)

    const produtosRelacionados = await this.produtoRepository.findBy({ id: In(produtosIds) })
    const pedidoEntity = new PedidoEntity();

    pedidoEntity.status = StatusPedido.EM_PROCESSAMENTO;
    pedidoEntity.usuario = usuario;

    this.trataDadosDoPedido(dadosDoPedido, produtosRelacionados)

    const itensPedidoEntidades = dadosDoPedido.itensPedido.map((itemPedido) => {
      const produtoRelacionado = produtosRelacionados.find((produto) => produto.id === itemPedido.produtoId)

      const itemPedidoEntity = new ItemPedidoEntity();

      itemPedidoEntity.produto = produtoRelacionado!; /* usando o ! p assegurar que já foi averiguado que ele existe sim. não é uma boa prática*/
      itemPedidoEntity.precoVenda = produtoRelacionado!.valor ;

      itemPedidoEntity.quantidade = itemPedido.quantidade;
      itemPedidoEntity.produto.quantidadeDisponivel -= itemPedido.quantidade;
      return itemPedidoEntity
    })

    console.log('pedido service');

    const valorTotal = itensPedidoEntidades.reduce((total, item) => { 
      return total + item.precoVenda * item.quantidade 
    }, 0);

    pedidoEntity.itensPedido = itensPedidoEntidades /* essa linha cria os itensPedidos automaticamente, com o cascade true */
    pedidoEntity.valorTotal = valorTotal

    const pedidoCriado = await this.pedidoRepository.save(pedidoEntity)
    return pedidoCriado
  }

  getPedidosDeUsuario(usuarioId: string) {
    const usuario = this.pedidoRepository.findOne({
      where: { usuario: { id: usuarioId }},
      relations: { usuario: true }
    })
    if(!usuario) return 'usuário não encontrado'

    return usuario
  }

  async atualizaPedido(id: string, dto: AtualizaPedidoDto) {
    const pedido = await this.pedidoRepository.findOneBy({ id });

    if (pedido === null) throw new NotFoundException('O pedido não foi encontrado.');

    Object.assign(pedido, dto as PedidoEntity);

    return this.pedidoRepository.save(pedido);
  }
}
