import { ProdutoEntity } from "./produto.entity";
import { Repository } from "typeorm";
export declare class ProdutoService {
    private readonly produtoRepository;
    constructor(produtoRepository: Repository<ProdutoEntity>);
    criaProduto(produtoEntity: ProdutoEntity): Promise<void>;
}
