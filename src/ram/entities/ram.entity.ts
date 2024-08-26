import { Product } from 'src/products/entities/product.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';

@Entity()
export class RAM {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  brand: string;

  @Column()
  model: string;

  @Column('int')
  size: number;

  @Column()
  type: string;

  @Column('int')
  speed: number;

  @Column('int')
  modules: number;

  @ManyToMany(() => Product, (product) => product.ram)
  products: Product[];
}
