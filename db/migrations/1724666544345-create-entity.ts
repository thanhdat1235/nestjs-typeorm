import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateEntity1724666544345 implements MigrationInterface {
    name = 'CreateEntity1724666544345'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`case\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`formFactor\` varchar(255) NOT NULL, \`size\` varchar(255) NULL, \`color\` varchar(255) NOT NULL, \`dimensions\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`category\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`cpu\` (\`id\` varchar(36) NOT NULL, \`brand\` varchar(255) NOT NULL, \`model\` varchar(255) NOT NULL, \`cores\` int NOT NULL, \`threads\` int NOT NULL, \`baseClock\` int NOT NULL, \`boostClock\` int NOT NULL, \`socketType\` varchar(255) NOT NULL, \`tdp\` int NOT NULL, \`integratedGraphics\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`gpu\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`memory\` int NOT NULL, \`coreClock\` int NOT NULL, \`boostClock\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`motherboard\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`chipset\` varchar(255) NOT NULL, \`formFactor\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`power_supply\` (\`id\` varchar(36) NOT NULL, \`wattage\` varchar(255) NOT NULL, \`efficiency\` varchar(255) NOT NULL, \`formFactor\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`ram\` (\`id\` varchar(36) NOT NULL, \`brand\` varchar(255) NOT NULL, \`model\` varchar(255) NOT NULL, \`size\` int NOT NULL, \`type\` varchar(255) NOT NULL, \`speed\` int NOT NULL, \`modules\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`storage\` (\`id\` varchar(36) NOT NULL, \`type\` varchar(255) NOT NULL, \`capacity\` varchar(255) NOT NULL, \`interface\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`product\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`price\` decimal NOT NULL, \`description\` varchar(255) NOT NULL, \`imageUrl\` varchar(255) NOT NULL, \`categoryId\` varchar(36) NULL, \`cpuId\` varchar(36) NULL, \`gpuId\` varchar(36) NULL, \`ramId\` varchar(36) NULL, \`storageId\` varchar(36) NULL, \`powerSupplyId\` varchar(36) NULL, \`caseId\` varchar(36) NULL, \`motherboardId\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`order\` (\`id\` varchar(36) NOT NULL, \`totalPrice\` decimal NOT NULL, \`quantity\` int NOT NULL, \`orderDate\` datetime NOT NULL, \`userId\` varchar(36) NULL, \`productId\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`users\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`phoneNumber\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`address\` varchar(255) NOT NULL, \`roles\` text NOT NULL, UNIQUE INDEX \`IDX_97672ac88f789774dd47f7c8be\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`product\` ADD CONSTRAINT \`FK_ff0c0301a95e517153df97f6812\` FOREIGN KEY (\`categoryId\`) REFERENCES \`category\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`product\` ADD CONSTRAINT \`FK_6304f52853a2f5400f138212b73\` FOREIGN KEY (\`cpuId\`) REFERENCES \`cpu\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`product\` ADD CONSTRAINT \`FK_4b5966318c4c6caba8b5a068707\` FOREIGN KEY (\`gpuId\`) REFERENCES \`gpu\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`product\` ADD CONSTRAINT \`FK_737d34b69f20a6c249f7f4679ec\` FOREIGN KEY (\`ramId\`) REFERENCES \`ram\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`product\` ADD CONSTRAINT \`FK_78fe521432160c65c2436802925\` FOREIGN KEY (\`storageId\`) REFERENCES \`storage\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`product\` ADD CONSTRAINT \`FK_e011f226d10c61899e60cea2adf\` FOREIGN KEY (\`powerSupplyId\`) REFERENCES \`power_supply\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`product\` ADD CONSTRAINT \`FK_1ffe364f22659db44097fdfe1c4\` FOREIGN KEY (\`caseId\`) REFERENCES \`case\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`product\` ADD CONSTRAINT \`FK_329724e27fb8eec12eb1d09c726\` FOREIGN KEY (\`motherboardId\`) REFERENCES \`motherboard\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`order\` ADD CONSTRAINT \`FK_caabe91507b3379c7ba73637b84\` FOREIGN KEY (\`userId\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`order\` ADD CONSTRAINT \`FK_88991860e839c6153a7ec878d39\` FOREIGN KEY (\`productId\`) REFERENCES \`product\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`order\` DROP FOREIGN KEY \`FK_88991860e839c6153a7ec878d39\``);
        await queryRunner.query(`ALTER TABLE \`order\` DROP FOREIGN KEY \`FK_caabe91507b3379c7ba73637b84\``);
        await queryRunner.query(`ALTER TABLE \`product\` DROP FOREIGN KEY \`FK_329724e27fb8eec12eb1d09c726\``);
        await queryRunner.query(`ALTER TABLE \`product\` DROP FOREIGN KEY \`FK_1ffe364f22659db44097fdfe1c4\``);
        await queryRunner.query(`ALTER TABLE \`product\` DROP FOREIGN KEY \`FK_e011f226d10c61899e60cea2adf\``);
        await queryRunner.query(`ALTER TABLE \`product\` DROP FOREIGN KEY \`FK_78fe521432160c65c2436802925\``);
        await queryRunner.query(`ALTER TABLE \`product\` DROP FOREIGN KEY \`FK_737d34b69f20a6c249f7f4679ec\``);
        await queryRunner.query(`ALTER TABLE \`product\` DROP FOREIGN KEY \`FK_4b5966318c4c6caba8b5a068707\``);
        await queryRunner.query(`ALTER TABLE \`product\` DROP FOREIGN KEY \`FK_6304f52853a2f5400f138212b73\``);
        await queryRunner.query(`ALTER TABLE \`product\` DROP FOREIGN KEY \`FK_ff0c0301a95e517153df97f6812\``);
        await queryRunner.query(`DROP INDEX \`IDX_97672ac88f789774dd47f7c8be\` ON \`users\``);
        await queryRunner.query(`DROP TABLE \`users\``);
        await queryRunner.query(`DROP TABLE \`order\``);
        await queryRunner.query(`DROP TABLE \`product\``);
        await queryRunner.query(`DROP TABLE \`storage\``);
        await queryRunner.query(`DROP TABLE \`ram\``);
        await queryRunner.query(`DROP TABLE \`power_supply\``);
        await queryRunner.query(`DROP TABLE \`motherboard\``);
        await queryRunner.query(`DROP TABLE \`gpu\``);
        await queryRunner.query(`DROP TABLE \`cpu\``);
        await queryRunner.query(`DROP TABLE \`category\``);
        await queryRunner.query(`DROP TABLE \`case\``);
    }

}
