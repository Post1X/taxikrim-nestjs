import { Module } from '@nestjs/common';
import { CarbrandsService } from './carbrands.service';
import { CarbrandsController } from './carbrands.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CarBrand, CarBrandsSchema } from './schemas/carbrand.schema';

@Module({
  controllers: [CarbrandsController],
  imports: [
    MongooseModule.forFeature([
      { name: CarBrand.name, schema: CarBrandsSchema },
    ]),
  ],
  providers: [CarbrandsService],
})
export class CarbrandsModule {}
