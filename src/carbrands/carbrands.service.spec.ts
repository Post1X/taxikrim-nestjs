import { Test, TestingModule } from '@nestjs/testing';
import { CarbrandsService } from './carbrands.service';

describe('CarbrandsService', () => {
  let service: CarbrandsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarbrandsService],
    }).compile();

    service = module.get<CarbrandsService>(CarbrandsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
