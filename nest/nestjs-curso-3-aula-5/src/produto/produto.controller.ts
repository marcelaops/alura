import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Put,
  UseInterceptors,
} from '@nestjs/common';

import { AtualizaProdutoDTO } from './dto/AtualizaProduto.dto';
import { CriaProdutoDTO } from './dto/CriaProduto.dto';
import { ProdutoService } from './produto.service';
import { CACHE_MANAGER, CacheInterceptor } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { ProdutoEntity } from './produto.entity';

@Controller('produtos')
export class ProdutoController {
  constructor(
    private readonly produtoService: ProdutoService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  @Post()
  async criaNovo(@Body() dadosProduto: CriaProdutoDTO) {
    const produtoCadastrado = await this.produtoService.criaProduto(
      dadosProduto,
    );

    return {
      mensagem: 'Produto criado com sucesso.',
      produto: produtoCadastrado,
    };
  }

  @Get()
  @UseInterceptors(CacheInterceptor)
  async listaTodos() {
    return await this.produtoService.listaProdutos();
  }

  @Get('/:id')
  @UseInterceptors(CacheInterceptor)
  async listaUm(@Param('id') id: string) {
    const produto = await this.produtoService.listaUmProduto(id);

    console.log('Produto sendo buscado do BD!');
    /* com esse console, vemos que no intervalo de   10 (ttl declarado no appModule), a mesma resposta se apertamos n vezes. Porém só faz a req p o banco 1 única vez. Essas infos estão armazenadas no cache */

    return { mensagem: 'Produto encontrado', produto };

    // tentando otimizar, mas não deu muito certo
    // let produto = await this.cacheManager.get(`produto-${id}`);

    // if (!produto) {
    //   console.log(
    //     'Obtendo produto do cache!',
    //   ); /* tá sempre entrando aqui, n entendi pq */
    //   produto = await this.produtoService.listaUmProduto(id);

    //   await this.cacheManager.set(`produto-${id}`, produto, 10);
    // }

    // return {
    //   mensagem: 'Produto obtido com sucesso.',
    //   produto,
    // };
  }

  @Put('/:id')
  async atualiza(
    @Param('id') id: string,
    @Body() dadosProduto: AtualizaProdutoDTO,
  ) {
    const produtoAlterado = await this.produtoService.atualizaProduto(
      id,
      dadosProduto,
    );

    return {
      mensagem: 'produto atualizado com sucesso',
      produto: produtoAlterado,
    };
  }

  @Delete('/:id')
  async remove(@Param('id') id: string) {
    const produtoRemovido = await this.produtoService.deletaProduto(id);

    return {
      mensagem: 'produto removido com sucesso',
      produto: produtoRemovido,
    };
  }
}
