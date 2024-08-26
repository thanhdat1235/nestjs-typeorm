import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GPU } from './entities/gpu.entity';
import { CreateGpuDto } from './dto/create-gpu.dto';
import { UpdateGpuDto } from './dto/update-gpu.dto';

@Injectable()
export class GpuService {
  constructor(
    @InjectRepository(GPU)
    private readonly gpuRepository: Repository<GPU>,
  ) {}

  async create(createGpuDto: CreateGpuDto): Promise<GPU> {
    const gpu = this.gpuRepository.create(createGpuDto);
    return this.gpuRepository.save(gpu);
  }

  async findAll(): Promise<GPU[]> {
    return this.gpuRepository.find();
  }

  async findOne(id: number): Promise<GPU> {
    const gpu = await this.gpuRepository.findOneBy({ id });
    if (!gpu) {
      throw new NotFoundException(`GPU with ID ${id} not found`);
    }
    return gpu;
  }

  async update(id: number, updateGpuDto: UpdateGpuDto): Promise<GPU> {
    const gpu = await this.gpuRepository.preload({
      id,
      ...updateGpuDto,
    });
    if (!gpu) {
      throw new NotFoundException(`GPU with ID ${id} not found`);
    }
    return this.gpuRepository.save(gpu);
  }

  async remove(id: number): Promise<void> {
    const gpu = await this.findOne(id);
    await this.gpuRepository.remove(gpu);
  }
}
