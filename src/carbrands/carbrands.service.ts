import { Injectable } from '@nestjs/common';
import { CarBrand, CarBrandsDocument } from './schemas/carbrand.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CarbrandsService {
  constructor(
    @InjectModel(CarBrand.name)
    private carBrandModel: Model<CarBrandsDocument>,
  ) {}
  async getCars(title) {
    const regex = new RegExp(title, 'i');
    console.log(regex);
    return await this.carBrandModel.find({ title: { $regex: regex } });
  }
}
