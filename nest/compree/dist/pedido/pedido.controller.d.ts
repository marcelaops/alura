import { PedidoService } from './pedido.service';
import { CriaPedidoDTO } from './dto/CriaPedido.dto';
import { AtualizaPedidoDto } from './dto/AtualizaPedido.dto';
export declare class PedidoController {
    private readonly pedidoService;
    constructor(pedidoService: PedidoService);
    criaPedido(usuarioId: string, dadosDoPedido: CriaPedidoDTO): Promise<import("./pedido.entity").PedidoEntity>;
    getPedidosDeUsuario(usuarioId: string): Promise<import("./pedido.entity").PedidoEntity | "usuário não encontrado" | null>;
    atualizaPedido(pedidoId: string, dadosDeAtualizacao: AtualizaPedidoDto): Promise<import("./pedido.entity").PedidoEntity>;
}
