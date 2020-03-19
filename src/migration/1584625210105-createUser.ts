import {MigrationInterface, QueryRunner} from "typeorm";

export class createUser1584625210105 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(
            `CREATE TABLE public."user"
            (
                id uuid NOT NULL DEFAULT uuid_generate_v4(),
                login character varying COLLATE pg_catalog."default" NOT NULL,
                password character varying COLLATE pg_catalog."default" NOT NULL,
                CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY (id)
            )`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        ` ALTER TABLE public."user" `
    }

}
