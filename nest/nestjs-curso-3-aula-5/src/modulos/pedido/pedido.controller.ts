import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Query,
  UseGuards,
  Req,
} from '@nestjs/common';
import { PedidoService } from './pedido.service';
import { AtualizaPedidoDto } from './dto/AtualizaPedido.dto';
import { CriaPedidoDTO } from './dto/CriaPedido.dto';
import {
  AutenticacaoGuard,
  RequisicaoComUsuario,
} from '../autenticacao/autenticacao/autenticacao.guard';

@UseGuards(
  AutenticacaoGuard,
) /* aqui dá proteção para todas as rotas desse aarquivo */
@Controller('pedidos')
export class PedidoController {
  constructor(private readonly pedidoService: PedidoService) {}

  @Get('hello')
  async() {
    return this.pedidoService.getHello();
  }

  @Post()
  @UseGuards(AutenticacaoGuard)
  async criaPedido(
    @Req() req: RequisicaoComUsuario,
    @Body() dadosDoPedido: CriaPedidoDTO,
  ) {
    const usuarioId = req.usuario.sub;
    const pedidoCriado = await this.pedidoService.cadastraPedido(
      usuarioId,
      dadosDoPedido,
    );
    return pedidoCriado;
  }

  @Get()
  async obtemPedidosDeUsuario(@Req() req: RequisicaoComUsuario) {
    const usuarioId = req.usuario.sub;
    const pedidos = await this.pedidoService.obtemPedidosDeUsuario(usuarioId);

    return pedidos;
  }

  @Patch(':id')
  atualizaPedido(
    @Req() req: RequisicaoComUsuario,
    @Param('id') pedidoId: string,
    @Body() dadosDeAtualizacao: AtualizaPedidoDto,
  ) {
    const usuarioId = req.usuario.sub;

    return this.pedidoService.atualizaPedido(
      pedidoId,
      dadosDeAtualizacao,
      usuarioId,
    );
  }
}
