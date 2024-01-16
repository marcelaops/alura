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

  @Put()
  async atualizaPedido(
    @Param('pedidoId') pedidoId: string,
    @Body() dadosDeAtualização: AtualizaPedidoDto
  ) {
    const pedidoAtualizado = await this.pedidoService.atualizaPedido(pedidoId, dadosDeAtualização);
    return pedidoAtualizado;
  }
}
