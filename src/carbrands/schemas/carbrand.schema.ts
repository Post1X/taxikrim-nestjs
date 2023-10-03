import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CarBrandsDocument = CarBrand & Document;
@Schema()
export class CarBrand {
  @Prop()
  title: string;
}

export const CarBrandsSchema = SchemaFactory.createForClass(CarBrand);
