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
        await queryRunner.query(
            `CREATE TABLE public."product"
            (
                id integer NOT NULL DEFAULT nextval('product_id_seq'::regclass),
                title character varying COLLATE pg_catalog."default" NOT NULL,
                description character varying COLLATE pg_catalog."default" NOT NULL,
                "userId" uuid NOT NULL,
                CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY (id),
                CONSTRAINT "FK_329b8ae12068b23da547d3b4798" FOREIGN KEY ("userId")
                    REFERENCES public."user" (id) MATCH SIMPLE
                    ON UPDATE NO ACTION
                    ON DELETE NO ACTION
            )`
        );

        await queryRunner.query(
            `CREATE TABLE public."cart"
            (
                id integer NOT NULL DEFAULT nextval('cart_id_seq'::regclass),
                "userId" character varying COLLATE pg_catalog."default" NOT NULL,
                "productId" integer NOT NULL,
                CONSTRAINT "PK_c524ec48751b9b5bcfbf6e59be7" PRIMARY KEY (id),
                CONSTRAINT "FK_371eb56ecc4104c2644711fa85f" FOREIGN KEY ("productId")
                    REFERENCES public.product (id) MATCH SIMPLE
                    ON UPDATE NO ACTION
                    ON DELETE NO ACTION
            )`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "user"`)
        await queryRunner.query(`DROP TABLE "product"`)
        await queryRunner.query(`DROP TABLE "cart"`)
    }

}
