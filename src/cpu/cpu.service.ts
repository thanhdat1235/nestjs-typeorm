import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CPU } from './entities/cpu.entity';
import { CreateCpuDto } from './dto/create-cpu.dto';
import { UpdateCpuDto } from './dto/update-cpu.dto';

@Injectable()
export class CpuService {
  constructor(
    @InjectRepository(CPU)
    private readonly cpuRepository: Repository<CPU>,
  ) {}

  async create(createCpuDto: CreateCpuDto): Promise<CPU> {
    const cpu = this.cpuRepository.create(createCpuDto);
    return this.cpuRepository.save(cpu);
  }

  async findAll(): Promise<CPU[]> {
    return this.cpuRepository.find();
  }

  async findOne(id: number): Promise<CPU> {
    const cpu = await this.cpuRepository.findOneBy({ id });
    if (!cpu) {
      throw new NotFoundException(`CPU with ID ${id} not found`);
    }
    return cpu;
  }

  async update(id: number, updateCpuDto: UpdateCpuDto): Promise<CPU> {
    const cpu = await this.cpuRepository.preload({
      id,
      ...updateCpuDto,
    });
    if (!cpu) {
      throw new NotFoundException(`CPU with ID ${id} not found`);
    }
    return this.cpuRepository.save(cpu);
  }

  async remove(id: number): Promise<void> {
    const cpu = await this.findOne(id);
    await this.cpuRepository.remove(cpu);
  }
}
