"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioController = void 0;
const common_1 = require("@nestjs/common");
const CriaUsuario_dto_1 = require("./dto/CriaUsuario.dto");
const usuario_entity_1 = require("./usuario.entity");
const uuid_1 = require("uuid");
const ListaUsuario_dto_1 = require("./dto/ListaUsuario.dto");
const AtualizaUsuario_dto_1 = require("./dto/AtualizaUsuario.dto");
const usuario_service_1 = require("./usuario.service");
let UsuarioController = class UsuarioController {
    constructor(usuarioService) {
        this.usuarioService = usuarioService;
    }
    async criaUsuario(dadosDoUsuario) {
        const usuarioEntity = new usuario_entity_1.UsuarioEntity();
        usuarioEntity.nome = dadosDoUsuario.nome;
        usuarioEntity.email = dadosDoUsuario.email;
        usuarioEntity.senha = dadosDoUsuario.senha;
        usuarioEntity.id = (0, uuid_1.v4)();
        this.usuarioService.criaUsuario(usuarioEntity);
        return {
            usuario: new ListaUsuario_dto_1.ListaUsuarioDTO(usuarioEntity.id, usuarioEntity.nome),
            message: 'usuário criado com sucesso'
        };
    }
    async listUsuarios() {
        const usuariosSalvos = await this.usuarioService.listaUsuarios();
        console.log(usuariosSalvos);
        return usuariosSalvos;
    }
    async atualizaUsuario(id, novosDados) {
        const usuarioAtualizado = await this.usuarioService.atualizaUsuario(id, novosDados);
        return {
            usuario: usuarioAtualizado,
            message: 'usuário atualizado',
        };
    }
    async removeUsuario(id) {
        const usuarioRemovido = await this.usuarioService.deletaUsuario(id);
        return {
            usuario: usuarioRemovido,
            message: 'usuário removido com sucesso'
        };
    }
};
exports.UsuarioController = UsuarioController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CriaUsuario_dto_1.CriaUsuarioDTO]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "criaUsuario", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "listUsuarios", null);
__decorate([
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, AtualizaUsuario_dto_1.AtualizaUsuarioDTO]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "atualizaUsuario", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "removeUsuario", null);
exports.UsuarioController = UsuarioController = __decorate([
    (0, common_1.Controller)('/usuarios'),
    __metadata("design:paramtypes", [usuario_service_1.UsuarioService])
], UsuarioController);
//# sourceMappingURL=usuario.controller.js.map