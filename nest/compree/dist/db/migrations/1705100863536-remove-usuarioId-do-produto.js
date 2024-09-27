"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeUsuarioIdDoProduto1705100863536 = void 0;
class removeUsuarioIdDoProduto1705100863536 {
    constructor() {
        this.name = 'removeUsuarioIdDoProduto1705100863536';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "produtos" DROP COLUMN "usuario_id"`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "produtos" ADD "usuario_id" character varying(100)`);
    }
}
exports.removeUsuarioIdDoProduto1705100863536 = removeUsuarioIdDoProduto1705100863536;
//# sourceMappingURL=1705100863536-remove-usuarioId-do-produto.js.map