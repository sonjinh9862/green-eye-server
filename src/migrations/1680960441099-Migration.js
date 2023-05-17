const { MigrationInterface, QueryRunner } = require('typeorm');

module.exports = class Migration1680960441099 {
  name = 'Migration1680960441099';

  async up(queryRunner) {
    await queryRunner.query(
      `ALTER TABLE "user" ADD "user_id" character varying NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ADD "user_password" character varying NULL`,
    );
  }

  async down(queryRunner) {
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "user_password"`);
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "user_id"`);
  }
};
