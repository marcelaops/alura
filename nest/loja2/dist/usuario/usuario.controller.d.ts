import { UsuarioRepository } from './usuario.repository';
export declare class UsuarioController {
    private usuarioRepository;
    constructor(usuarioRepository: UsuarioRepository);
    criaUsuario(dadosDoUsuario: any): Promise<any>;
    listUsuarios(): Promise<any[]>;
}
