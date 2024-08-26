import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOption } from 'db/data-source';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { CpuModule } from './cpu/cpu.module';
import { GpuModule } from './gpu/gpu.module';
import { RamModule } from './ram/ram.module';
import { StorageModule } from './storage/storage.module';
import { PowerSupplyModule } from './power-supply/power-supply.module';
import { CaseModule } from './case/case.module';
import { MotherboardModule } from './motherboard/motherboard.module';
import { CategoryModule } from './category/category.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOption),
    UsersModule,
    ProductsModule,
    CpuModule,
    GpuModule,
    RamModule,
    StorageModule,
    PowerSupplyModule,
    CaseModule,
    MotherboardModule,
    CategoryModule,
    OrderModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
