import { Injectable } from '@nestjs/common';
import { CreateMotherboardDto } from './dto/create-motherboard.dto';
import { UpdateMotherboardDto } from './dto/update-motherboard.dto';

@Injectable()
export class MotherboardService {
  create(createMotherboardDto: CreateMotherboardDto) {
    return 'This action adds a new motherboard';
  }

  findAll() {
    return `This action returns all motherboard`;
  }

  findOne(id: number) {
    return `This action returns a #${id} motherboard`;
  }

  update(id: number, updateMotherboardDto: UpdateMotherboardDto) {
    return `This action updates a #${id} motherboard`;
  }

  remove(id: number) {
    return `This action removes a #${id} motherboard`;
  }
}
