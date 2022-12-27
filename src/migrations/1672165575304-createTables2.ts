import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables21672165575304 implements MigrationInterface {
    name = 'createTables21672165575304'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "adresses" ADD "propertieId" uuid`);
        await queryRunner.query(`ALTER TABLE "adresses" ADD CONSTRAINT "UQ_05cbd951b0df6bdb7b2a9bcc21f" UNIQUE ("propertieId")`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "isActive" SET DEFAULT 'true'`);
        await queryRunner.query(`ALTER TABLE "properties" ALTER COLUMN "sold" SET DEFAULT 'false'`);
        await queryRunner.query(`ALTER TABLE "adresses" ADD CONSTRAINT "FK_05cbd951b0df6bdb7b2a9bcc21f" FOREIGN KEY ("propertieId") REFERENCES "properties"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "adresses" DROP CONSTRAINT "FK_05cbd951b0df6bdb7b2a9bcc21f"`);
        await queryRunner.query(`ALTER TABLE "properties" ALTER COLUMN "sold" SET DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "isActive" SET DEFAULT true`);
        await queryRunner.query(`ALTER TABLE "adresses" DROP CONSTRAINT "UQ_05cbd951b0df6bdb7b2a9bcc21f"`);
        await queryRunner.query(`ALTER TABLE "adresses" DROP COLUMN "propertieId"`);
    }

}
