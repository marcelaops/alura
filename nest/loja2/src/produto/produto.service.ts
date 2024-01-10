import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ProdutoEntity } from "./produto.entity";
import { Repository } from "typeorm";

@Injectable() 
export class ProdutoService {
  constructor(@InjectRepository(ProdutoEntity) private readonly produtoRepository: Repository<ProdutoEntity>) {}

  async criaProduto(produtoEntity: ProdutoEntity) {
    await this.produtoRepository.save(produtoEntity);
  }

}