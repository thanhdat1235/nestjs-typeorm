import { Injectable } from '@nestjs/common';
import { CreatePowerSupplyDto } from './dto/create-power-supply.dto';
import { UpdatePowerSupplyDto } from './dto/update-power-supply.dto';

@Injectable()
export class PowerSupplyService {
  create(createPowerSupplyDto: CreatePowerSupplyDto) {
    return 'This action adds a new powerSupply';
  }

  findAll() {
    return `This action returns all powerSupply`;
  }

  findOne(id: number) {
    return `This action returns a #${id} powerSupply`;
  }

  update(id: number, updatePowerSupplyDto: UpdatePowerSupplyDto) {
    return `This action updates a #${id} powerSupply`;
  }

  remove(id: number) {
    return `This action removes a #${id} powerSupply`;
  }
}
