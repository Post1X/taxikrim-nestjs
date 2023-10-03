import { Module } from '@nestjs/common';
import { DriverDispatchService } from './driver-dispatch.service';
import { DriverDispatchController } from './driver-dispatch.controller';
import {
  DriverDispatches,
  DriverDispatchSchema,
} from './schemas/driver-dispatch.schema';
import { AuthModule } from '../auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [DriverDispatchController],
  imports: [
    MongooseModule.forFeature([
      { name: DriverDispatches.name, schema: DriverDispatchSchema },
    ]),
    AuthModule,
  ],
  providers: [DriverDispatchService],
})
export class DriverDispatchModule {}
