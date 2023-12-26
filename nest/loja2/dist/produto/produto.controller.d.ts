import { ProdutoRepository } from './produto.repository';
export declare class ProdutoController {
    private readonly produtoRepository;
    constructor(produtoRepository: ProdutoRepository);
    criaNovo(dadosProduto: any): void;
    listaTodos(): any[];
}
