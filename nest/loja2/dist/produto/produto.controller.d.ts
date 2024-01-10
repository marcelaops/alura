import { ProdutoRepository } from './produto.repository';
import { CriaProdutoDTO } from './dto/CriaProduto.dto';
import { ProdutoService } from './produto.service';
export declare class ProdutoController {
    private readonly produtoRepository;
    private readonly produtoService;
    constructor(produtoRepository: ProdutoRepository, produtoService: ProdutoService);
    criaNovo(dadosProduto: CriaProdutoDTO): Promise<void>;
    listaTodos(): any[];
}
