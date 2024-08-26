import { Product } from 'src/products/entities/product.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Motherboard {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  name: string;

  @Column()
  chipset: string;

  @Column()
  formFactor: string;

  @OneToMany(() => Product, (product) => product.motherboard)
  products: Product[];
}
