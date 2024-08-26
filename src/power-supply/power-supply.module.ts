import { Module } from '@nestjs/common';
import { PowerSupplyService } from './power-supply.service';
import { PowerSupplyController } from './power-supply.controller';

@Module({
  controllers: [PowerSupplyController],
  providers: [PowerSupplyService],
})
export class PowerSupplyModule {}
