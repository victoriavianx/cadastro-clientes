import { MigrationInterface, QueryRunner } from "typeorm";

export class updateContacts1663806339300 implements MigrationInterface {
    name = 'updateContacts1663806339300'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" ADD "email" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "email"`);
    }

}
