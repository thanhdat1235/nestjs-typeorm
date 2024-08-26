import { Test, TestingModule } from '@nestjs/testing';
import { PowerSupplyService } from './power-supply.service';

describe('PowerSupplyService', () => {
  let service: PowerSupplyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PowerSupplyService],
    }).compile();

    service = module.get<PowerSupplyService>(PowerSupplyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
