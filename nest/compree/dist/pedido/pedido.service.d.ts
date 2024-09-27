import { PedidoEntity } from './pedido.entity';
import { UsuarioEntity } from '../usuario/usuario.entity';
import { Repository } from 'typeorm';
import { CriaPedidoDTO } from './dto/CriaPedido.dto';
import { ProdutoEntity } from '../produto/produto.entity';
import { AtualizaPedidoDto } from './dto/AtualizaPedido.dto';
export declare class PedidoService {
    private readonly pedidoRepository;
    private readonly usuarioRepository;
    private readonly produtoRepository;
    constructor(pedidoRepository: Repository<PedidoEntity>, usuarioRepository: Repository<UsuarioEntity>, produtoRepository: Repository<ProdutoEntity>);
    private buscaUsuario;
    private trataDadosDoPedido;
    cadastraPedido(usuarioId: string, dadosDoPedido: CriaPedidoDTO): Promise<PedidoEntity>;
    getPedidosDeUsuario(usuarioId: string): Promise<PedidoEntity | null> | "usuário não encontrado";
    atualizaPedido(id: string, dto: AtualizaPedidoDto): Promise<PedidoEntity>;
}
