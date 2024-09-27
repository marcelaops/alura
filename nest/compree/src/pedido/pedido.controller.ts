import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Put } from '@nestjs/common';
import { PedidoService } from './pedido.service';
import { CriaPedidoDTO } from './dto/CriaPedido.dto';
import { AtualizaPedidoDto } from './dto/AtualizaPedido.dto';

@Controller('pedidos')
export class PedidoController {
  constructor(private readonly pedidoService: PedidoService) {}

  @Post()
  async criaPedido(
    @Query('usuarioId') usuarioId: string,
    @Body() dadosDoPedido : CriaPedidoDTO
    ) {
      const pedidoCriado = await this.pedidoService.cadastraPedido(
        usuarioId,
        dadosDoPedido,
      )
      return pedidoCriado;
  }

  @Get('usuarioId')
  async getPedidosDeUsuario(@Query('usuarioId') usuarioId: string) {
    return await this.pedidoService.getPedidosDeUsuario(usuarioId);
  }

  @Patch(':id')
  atualizaPedido(
    @Param('id') pedidoId: string,
    @Body() dadosDeAtualizacao: AtualizaPedidoDto,
  ) {
    const pedidoAtualizado = this.pedidoService.atualizaPedido(pedidoId, dadosDeAtualizacao);
    return pedidoAtualizado;
  }
}
