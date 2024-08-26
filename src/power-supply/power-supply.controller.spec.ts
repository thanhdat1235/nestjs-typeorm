import { Test, TestingModule } from '@nestjs/testing';
import { PowerSupplyController } from './power-supply.controller';
import { PowerSupplyService } from './power-supply.service';

describe('PowerSupplyController', () => {
  let controller: PowerSupplyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PowerSupplyController],
      providers: [PowerSupplyService],
    }).compile();

    controller = module.get<PowerSupplyController>(PowerSupplyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
