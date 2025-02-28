import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 50,
    nullable: false,
  })
  orderName: string;

  @Column({
    type: 'varchar',
    length: 96,
    nullable: false,
  })
  description: string;
}
