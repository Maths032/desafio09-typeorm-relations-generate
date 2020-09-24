import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class AddOrderIdToOrdersProducts1600916019914
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'orders_products',
      new TableColumn({
        name: 'order_id',
        type: 'uuid',
        isNullable: true,
      }),
    );

    await queryRunner.createForeignKey('orders_products');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
