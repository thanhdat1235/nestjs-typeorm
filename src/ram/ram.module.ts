import { Module } from '@nestjs/common';
import { RamService } from './ram.service';
import { RamController } from './ram.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RAM } from './entities/ram.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RAM])],
  controllers: [RamController],
  providers: [RamService],
})
export class RamModule {}
