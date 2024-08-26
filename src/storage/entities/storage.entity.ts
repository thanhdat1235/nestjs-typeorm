import { Product } from 'src/products/entities/product.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Storage {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  type: string;
  @Column()
  capacity: string;

  @Column()
  interface: string;

  @OneToMany(() => Product, (product) => product.storage)
  products: Product[];
}
