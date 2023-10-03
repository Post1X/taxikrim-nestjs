import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ClientsDocument = Clients & Document;
@Schema()
export class Clients {
  @Prop()
  phone: string;

  @Prop()
  full_name: string;

  @Prop()
  image: string;

  @Prop()
  code: string;
}

export const ClientSchema = SchemaFactory.createForClass(Clients);
