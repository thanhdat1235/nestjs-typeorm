import { Module } from '@nestjs/common';
import { GpuService } from './gpu.service';
import { GpuController } from './gpu.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GPU } from './entities/gpu.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GPU])],
  controllers: [GpuController],
  providers: [GpuService],
})
export class GpuModule {}
