import { MigrationInterface, QueryRunner } from "typeorm";
export declare class removeUsuarioIdDoProduto1705100863536 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
