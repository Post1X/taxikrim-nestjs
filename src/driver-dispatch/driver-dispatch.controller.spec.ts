import { Test, TestingModule } from '@nestjs/testing';
import { DriverDispatchController } from './driver-dispatch.controller';
import { DriverDispatchService } from './driver-dispatch.service';

describe('DriverDispatchController', () => {
  let controller: DriverDispatchController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DriverDispatchController],
      providers: [DriverDispatchService],
    }).compile();

    controller = module.get<DriverDispatchController>(DriverDispatchController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
