import { Case } from 'src/case/entities/case.entity';
import { Category } from 'src/category/entities/category.entity';
import { CPU } from 'src/cpu/entities/cpu.entity';
import { GPU } from 'src/gpu/entities/gpu.entity';
import { Motherboard } from 'src/motherboard/entities/motherboard.entity';
import { PowerSupply } from 'src/power-supply/entities/power-supply.entity';
import { RAM } from 'src/ram/entities/ram.entity';
import { Storage } from 'src/storage/entities/storage.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  name: string;

  @Column('decimal')
  price: number;

  @Column()
  description: string;

  @Column()
  imageUrl: string;

  @ManyToOne(() => Category, (category) => category.products)
  category: Category;

  @ManyToOne(() => CPU, (cpu) => cpu.products)
  cpu: CPU;

  @ManyToOne(() => GPU, (gpu) => gpu.products)
  gpu: GPU;

  @ManyToOne(() => RAM, (ram) => ram.products)
  ram: RAM;

  @ManyToOne(() => Storage, (storage) => storage.products)
  storage: Storage;

  @ManyToOne(() => PowerSupply, (powerSupply) => powerSupply.products)
  powerSupply: PowerSupply;

  @ManyToOne(() => Case, (pcCase) => pcCase.products)
  case: Case;

  @ManyToOne(() => Motherboard, (motherboard) => motherboard.products)
  motherboard: Motherboard;
}
