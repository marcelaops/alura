import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CriaUsuarioDTO } from './dto/CriaUsuario.dto';
import { UsuarioEntity } from './usuario.entity';
import { v4 as uuid } from 'uuid';
import { ListaUsuarioDTO } from './dto/ListaUsuario.dto';
import { AtualizaUsuarioDTO } from './dto/AtualizaUsuario.dto';
import { UsuarioService } from './usuario.service';

@Controller('/usuarios')
export class UsuarioController {
  constructor(private usuarioService: UsuarioService) {}

  @Post()
  async criaUsuario(@Body() dadosDoUsuario: CriaUsuarioDTO) {
    const usuarioEntity = new UsuarioEntity();

    usuarioEntity.nome = dadosDoUsuario.nome;
    usuarioEntity.email = dadosDoUsuario.email;
    usuarioEntity.senha = dadosDoUsuario.senha;
    //  p gerar um id instalamos a biblioteca UUid:
    usuarioEntity.id = uuid();

    this.usuarioService.criaUsuario(usuarioEntity);

    return { 
      usuario: new ListaUsuarioDTO(usuarioEntity.id, usuarioEntity.nome),
      message: 'usuário criado com sucesso'
    }
  }

  @Get()
  async listUsuarios() {
    // const usuariosSalvos = await this.usuarioRepository.listar();
    // const usuariosLista = usuariosSalvos.map(
    //   usuario => new ListaUsuarioDTO(
    //     usuario.id,
    //     usuario.nome
    //   )
    // );
    // return usuariosLista;
    const usuariosSalvos = await this.usuarioService.listaUsuarios();
    console.log(usuariosSalvos);

    return usuariosSalvos;
  }

  @Put('/:id')
  async atualizaUsuario(@Param('id') id: string, @Body() novosDados: AtualizaUsuarioDTO) {
    const usuarioAtualizado = await this.usuarioService.atualizaUsuario(id, novosDados);
    return {
      usuario: usuarioAtualizado,
      message: 'usuário atualizado',
    }
  }

  @Delete('/:id')
  async removeUsuario(@Param('id') id: string) {
    const usuarioRemovido = await this.usuarioService.deletaUsuario(id);
    return {
      usuario: usuarioRemovido,
      message: 'usuário removido com sucesso'
    }
  }
}
