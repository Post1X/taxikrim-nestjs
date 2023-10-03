import { Test, TestingModule } from '@nestjs/testing';
import { DriverDispatchService } from './driver-dispatch.service';

describe('DriverDispatchService', () => {
  let service: DriverDispatchService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DriverDispatchService],
    }).compile();

    service = module.get<DriverDispatchService>(DriverDispatchService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
