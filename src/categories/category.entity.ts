import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 96,
    nullable: false,
  })
  categoryName: string;

  @Column({
    type: 'varchar',
    length: 96,
    nullable: false,
  })
  description: string;
}
