import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateRolesColumn1724407941462 implements MigrationInterface {
    name = 'UpdateRolesColumn1724407941462'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`rolesString\` \`roles\` text NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`roles\` \`rolesString\` text NOT NULL`);
    }

}
