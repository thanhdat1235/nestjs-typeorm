import { Product } from 'src/products/entities/product.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class GPU {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  name: string;

  @Column('int')
  memory: number;

  @Column('int')
  coreClock: number;

  @Column('int')
  boostClock: number;

  @OneToMany(() => Product, (product) => product.gpu)
  products: Product[];
}
