import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 96,
    nullable: false,
  })
  productName: string;

  @Column({
    type: 'varchar',
    length: 96,
    nullable: false,
  })
  description: string;
}
