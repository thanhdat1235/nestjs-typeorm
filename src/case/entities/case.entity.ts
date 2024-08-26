import { Product } from 'src/products/entities/product.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Case {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  formFactor: string;

  @Column({ default: null })
  size: string;

  @Column()
  color: string;

  @Column()
  dimensions: string;

  @OneToMany(() => Product, (product) => product.case)
  products: Product[];
}
