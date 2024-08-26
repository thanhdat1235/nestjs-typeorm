import { Product } from 'src/products/entities/product.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class PowerSupply {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  wattage: string;

  @Column()
  efficiency: string;

  @Column()
  formFactor: string;

  @OneToMany(() => Product, (product) => product.powerSupply)
  products: Product[];
}
