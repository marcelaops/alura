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
exports.ProdutoController = void 0;
const common_1 = require("@nestjs/common");
const produto_repository_1 = require("./produto.repository");
const CriaProduto_dto_1 = require("./dto/CriaProduto.dto");
const produto_service_1 = require("./produto.service");
const crypto_1 = require("crypto");
const produto_entity_1 = require("./produto.entity");
let ProdutoController = class ProdutoController {
    constructor(produtoRepository, produtoService) {
        this.produtoRepository = produtoRepository;
        this.produtoService = produtoService;
    }
    criaNovo(dadosProduto) {
        const produto = new produto_entity_1.ProdutoEntity();
        produto.id = (0, crypto_1.randomUUID)();
        produto.nome = dadosProduto.nome;
        produto.usuarioId = dadosProduto.usuarioId;
        produto.valor = dadosProduto.valor;
        produto.quantidade = dadosProduto.quantidade;
        const produtoCadastrado = this.produtoService.criaProduto(produto);
        return produtoCadastrado;
    }
    listaTodos() {
        return this.produtoRepository.listaTodos();
    }
};
exports.ProdutoController = ProdutoController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CriaProduto_dto_1.CriaProdutoDTO]),
    __metadata("design:returntype", void 0)
], ProdutoController.prototype, "criaNovo", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProdutoController.prototype, "listaTodos", null);
exports.ProdutoController = ProdutoController = __decorate([
    (0, common_1.Controller)('produtos'),
    __metadata("design:paramtypes", [produto_repository_1.ProdutoRepository, produto_service_1.ProdutoService])
], ProdutoController);
//# sourceMappingURL=produto.controller.js.map