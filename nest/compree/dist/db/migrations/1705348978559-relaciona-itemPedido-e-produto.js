"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.relacionaItemPedidoEProduto1705348978559 = void 0;
class relacionaItemPedidoEProduto1705348978559 {
    constructor() {
        this.name = 'relacionaItemPedidoEProduto1705348978559';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "itens_pedidos" ADD "produtoId" uuid`);
        await queryRunner.query(`ALTER TABLE "itens_pedidos" ADD CONSTRAINT "FK_d07fbe9a1faab330529824f7fea" FOREIGN KEY ("produtoId") REFERENCES "produtos"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "itens_pedidos" DROP CONSTRAINT "FK_d07fbe9a1faab330529824f7fea"`);
        await queryRunner.query(`ALTER TABLE "itens_pedidos" DROP COLUMN "produtoId"`);
    }
}
exports.relacionaItemPedidoEProduto1705348978559 = relacionaItemPedidoEProduto1705348978559;
//# sourceMappingURL=1705348978559-relaciona-itemPedido-e-produto.js.map