import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RAM } from './entities/ram.entity';
import { CreateRamDto } from './dto/create-ram.dto';
import { UpdateRamDto } from './dto/update-ram.dto';

@Injectable()
export class RamService {
  constructor(
    @InjectRepository(RAM)
    private readonly ramRepository: Repository<RAM>,
  ) {}

  async create(createRamDto: CreateRamDto): Promise<RAM> {
    const ram = this.ramRepository.create(createRamDto);
    return this.ramRepository.save(ram);
  }

  async findAll(): Promise<RAM[]> {
    return this.ramRepository.find();
  }

  async findOne(id: number): Promise<RAM> {
    const ram = await this.ramRepository.findOneBy({ id });
    if (!ram) {
      throw new NotFoundException(`RAM with ID ${id} not found`);
    }
    return ram;
  }

  async update(id: number, updateRamDto: UpdateRamDto): Promise<RAM> {
    const ram = await this.ramRepository.preload({
      id,
      ...updateRamDto,
    });
    if (!ram) {
      throw new NotFoundException(`RAM with ID ${id} not found`);
    }
    return this.ramRepository.save(ram);
  }

  async remove(id: number): Promise<void> {
    const ram = await this.findOne(id);
    await this.ramRepository.remove(ram);
  }
}
