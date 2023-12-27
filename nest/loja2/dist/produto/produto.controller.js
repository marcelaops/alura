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
let ProdutoController = class ProdutoController {
    constructor(produtoRepository) {
        this.produtoRepository = produtoRepository;
    }
    criaNovo(dadosProduto) {
        const produtoCadastrado = this.produtoRepository.salva(dadosProduto);
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
    __metadata("design:paramtypes", [produto_repository_1.ProdutoRepository])
], ProdutoController);
//# sourceMappingURL=produto.controller.js.map