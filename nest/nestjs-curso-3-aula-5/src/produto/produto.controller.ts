import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseInterceptors,
} from '@nestjs/common';

import { AtualizaProdutoDTO } from './dto/AtualizaProduto.dto';
import { CriaProdutoDTO } from './dto/CriaProduto.dto';
import { ProdutoService } from './produto.service';
import { CacheInterceptor } from '@nestjs/cache-manager';

@Controller('produtos')
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}

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
  async listaTodos() {
    return this.produtoService.listaProdutos();
  }

  @Get('/:id')
  @UseInterceptors(CacheInterceptor)
  async listaUm(@Param('id') id: string) {
    const produtoSalvo = await this.produtoService.listaUmProduto(id);

    console.log('Produto sendo buscado do BD!');
    /* com esse console, vemos que no intervalo de 10 (ttl declarado no appModule), a mesma resposta se apertamos n vezes. Porém só faz a req p o banco 1 única vez. Essas infos estão armazenadas no cache */

    return produtoSalvo;
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
