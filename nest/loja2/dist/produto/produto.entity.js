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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoEntity = void 0;
const typeorm_1 = require("typeorm");
let ProdutoEntity = class ProdutoEntity {
};
exports.ProdutoEntity = ProdutoEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ProdutoEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'usuario_id', length: 100, nullable: false }),
    __metadata("design:type", String)
], ProdutoEntity.prototype, "usuarioId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'nome', length: 100, nullable: false }),
    __metadata("design:type", String)
], ProdutoEntity.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'valor', nullable: false }),
    __metadata("design:type", Number)
], ProdutoEntity.prototype, "valor", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'quantidade', nullable: false }),
    __metadata("design:type", Number)
], ProdutoEntity.prototype, "quantidade", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'descricao', length: 255, nullable: false }),
    __metadata("design:type", String)
], ProdutoEntity.prototype, "descricao", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'categoria', length: 100, nullable: false }),
    __metadata("design:type", String)
], ProdutoEntity.prototype, "categoria", void 0);
exports.ProdutoEntity = ProdutoEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'produtos' })
], ProdutoEntity);
//# sourceMappingURL=produto.entity.js.map