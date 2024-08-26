import { Module } from '@nestjs/common';
import { CaseService } from './case.service';
import { CaseController } from './case.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Case } from './entities/case.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Case])],
  controllers: [CaseController],
  providers: [CaseService],
})
export class CaseModule {}
