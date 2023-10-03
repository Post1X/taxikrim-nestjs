import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule } from './clients/clients.module';
import { DriverDispatchModule } from './driver-dispatch/driver-dispatch.module';
import { TariffModule } from './tariff/tariff.module';
import { OrdersModule } from './orders/orders.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { StatusesModule } from './statuses/statuses.module';
import { CarbrandsModule } from './carbrands/carbrands.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.1',
      { dbName: 'taxi-krim' },
    ),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public', 'images'),
    }),
    ClientsModule,
    DriverDispatchModule,
    TariffModule,
    OrdersModule,
    StatusesModule,
    CarbrandsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
