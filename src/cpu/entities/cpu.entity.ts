import { Product } from 'src/products/entities/product.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';

@Entity()
export class CPU {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  brand: string;

  @Column()
  model: string;

  @Column('int')
  cores: number;

  @Column('int')
  threads: number;

  @Column('int')
  baseClock: number;

  @Column('int')
  boostClock: number;

  @Column()
  socketType: string;

  @Column('int')
  tdp: number;

  @Column()
  integratedGraphics: string;

  @ManyToMany(() => Product, (product) => product.cpu)
  products: Product[];
}
