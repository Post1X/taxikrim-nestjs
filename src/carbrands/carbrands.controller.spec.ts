import { Test, TestingModule } from '@nestjs/testing';
import { CarbrandsController } from './carbrands.controller';
import { CarbrandsService } from './carbrands.service';

describe('CarbrandsController', () => {
  let controller: CarbrandsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarbrandsController],
      providers: [CarbrandsService],
    }).compile();

    controller = module.get<CarbrandsController>(CarbrandsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
