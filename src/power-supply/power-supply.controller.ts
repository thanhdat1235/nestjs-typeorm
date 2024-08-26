import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PowerSupplyService } from './power-supply.service';
import { CreatePowerSupplyDto } from './dto/create-power-supply.dto';
import { UpdatePowerSupplyDto } from './dto/update-power-supply.dto';

@Controller('power-supply')
export class PowerSupplyController {
  constructor(private readonly powerSupplyService: PowerSupplyService) {}

  @Post()
  create(@Body() createPowerSupplyDto: CreatePowerSupplyDto) {
    return this.powerSupplyService.create(createPowerSupplyDto);
  }

  @Get()
  findAll() {
    return this.powerSupplyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.powerSupplyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePowerSupplyDto: UpdatePowerSupplyDto) {
    return this.powerSupplyService.update(+id, updatePowerSupplyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.powerSupplyService.remove(+id);
  }
}
