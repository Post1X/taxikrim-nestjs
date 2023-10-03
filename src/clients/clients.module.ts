import { Module } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { ClientsController } from './clients.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Clients, ClientSchema } from './schemas/client.schema';
import { AuthModule } from '../auth/auth.module';

@Module({
  controllers: [ClientsController],
  imports: [
    MongooseModule.forFeature([{ name: Clients.name, schema: ClientSchema }]),
    AuthModule,
  ],
  providers: [ClientsService],
})
export class ClientsModule {}
