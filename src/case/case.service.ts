import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateCaseDto } from './dto/create-case.dto';
import { UpdateCaseDto } from './dto/update-case.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Case } from './entities/case.entity';
import { Repository } from 'typeorm';
import { PaginationDto } from 'src/validation/pagination.validator';
import { PaginationResult } from 'src/types/pagination.type';
import { paginate } from 'src/utility/common/pagination.util';

@Injectable()
export class CaseService {
  constructor(
    @InjectRepository(Case)
    private readonly caseRepository: Repository<Case>,
  ) {}
  async create(createCaseDto: CreateCaseDto): Promise<Case> {
    try {
      const newCase = await this.caseRepository.create(createCaseDto);
      return await this.caseRepository.save(newCase);
    } catch (error) {
      console.log(error);
      throw new HttpException(
        'Something wrong. Please try again !',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findAll(paginationDto: PaginationDto): Promise<PaginationResult<Case>> {
    return await paginate(this.caseRepository, paginationDto);
  }

  async findOne(id: string) {
    try {
      const caseById = await this.caseRepository.findOneBy({ id });

      if (!caseById) {
        throw new NotFoundException('Case not found');
      }

      return caseById;
    } catch (error) {
      console.log(error);
      throw new HttpException(
        'Something wrong. Please try again !',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async update(id: string, updateCaseDto: UpdateCaseDto): Promise<Case> {
    try {
      const result = await this.caseRepository.update(id, updateCaseDto);

      if (result.affected === 0) {
        throw new NotFoundException(`User with ID ${id} not found`);
      }

      const updatedCase = await this.caseRepository.findOneBy({ id });

      if (!updatedCase) {
        throw new NotFoundException('Case not found');
      }

      return updatedCase;
    } catch (error) {
      console.log(error);
      throw new HttpException(
        'Something wrong. Please try again !',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async remove(id: string): Promise<string> {
    try {
      await this.caseRepository.delete(id);
      return `Deleted case with id=${id} successfully!`;
    } catch (error) {
      console.log(error);
      throw new HttpException(
        'Something wrong. Please try again !',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
