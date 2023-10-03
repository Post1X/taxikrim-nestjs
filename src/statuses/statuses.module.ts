import { Module } from '@nestjs/common';
import { StatusesService } from './statuses.service';
import { StatusesController } from './statuses.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  DriverStatuses,
  DriverStatusesSchema,
} from './schemas/statuses.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: DriverStatuses.name, schema: DriverStatusesSchema },
    ]),
  ],
  controllers: [StatusesController],
  providers: [StatusesService],
})
export class StatusesModule {}
