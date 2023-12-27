import { ProdutoRepository } from './produto.repository';
import { CriaProdutoDTO } from './dto/CriaProduto.dto';
export declare class ProdutoController {
    private readonly produtoRepository;
    constructor(produtoRepository: ProdutoRepository);
    criaNovo(dadosProduto: CriaProdutoDTO): void;
    listaTodos(): any[];
}
