import { MigrationInterface, QueryRunner } from "typeorm";

export class updateContacts1663800691480 implements MigrationInterface {
    name = 'updateContacts1663800691480'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "phone"`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "phone" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "cellphone"`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "cellphone" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "cellphone"`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "cellphone" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "phone"`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "phone" integer NOT NULL`);
    }

}
