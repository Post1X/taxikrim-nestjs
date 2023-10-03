import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DriverStatusesDocument = DriverStatuses & Document;
@Schema()
export class DriverStatuses {
  @Prop()
  title: string;
}

export const DriverStatusesSchema =
  SchemaFactory.createForClass(DriverStatuses);
