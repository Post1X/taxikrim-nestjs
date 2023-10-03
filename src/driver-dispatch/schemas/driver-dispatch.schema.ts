import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type DriverDispatchDocument = DriverDispatches & Document;

@Schema()
export class DriverDispatches {
  @Prop()
  avatar: string;

  @Prop()
  frontPassport: string;

  @Prop()
  backPassport: string;

  @Prop()
  phone: string;

  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  middleName: string;

  @Prop()
  firstCarPhoto: string;

  @Prop()
  secondCarPhoto: string;

  @Prop()
  thirdCarPhoto: string;

  @Prop()
  fourthCarPhoto: string;

  @Prop()
  publicNumber: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'CarBrands' })
  carBrandId: mongoose.Types.ObjectId;

  @Prop()
  carColor: string;

  @Prop()
  carModel: string;

  @Prop()
  tariffId: mongoose.Types.ObjectId;

  @Prop()
  code: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'DriverStatuses' })
  statusId: mongoose.Types.ObjectId;
}

export const DriverDispatchSchema =
  SchemaFactory.createForClass(DriverDispatches);
