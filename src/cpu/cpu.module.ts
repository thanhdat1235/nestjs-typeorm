import { Module } from '@nestjs/common';
import { CpuService } from './cpu.service';
import { CpuController } from './cpu.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CPU } from './entities/cpu.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CPU])],
  controllers: [CpuController],
  providers: [CpuService],
})
export class CpuModule {}
