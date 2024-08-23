import {
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { instanceToPlain } from 'class-transformer';
import { PaginationResult } from 'src/types/pagination.type';
import { PaginationDto } from 'src/validation/pagination.validator';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  async signup(body: CreateUserDto) {
    try {
      const user = this.usersRepository.create(body);
      return await this.usersRepository.save(user);
    } catch (error) {
      console.log(error);

      throw new HttpException(
        'Creating new user failed',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findAll(
    paginationDto: PaginationDto,
  ): Promise<PaginationResult<UserEntity>> {
    try {
      const { page, limit } = paginationDto;

      if (page <= 0 || limit <= 0) {
        throw new HttpException(
          'Invalid pagination parameters',
          HttpStatus.BAD_REQUEST,
        );
      }

      const res = await this.usersRepository.findAndCount({
        skip: (page - 1) * limit || 0,
        take: limit || 10,
      });

      const [items, totalItems] = res;

      const totalPages = Math.ceil(totalItems / limit);

      return {
        items,
        totalItems,
        totalPages,
        currentPage: Number(page),
        pageSize: Number(limit),
      };
    } catch (error) {
      console.log(error);

      throw new HttpException(
        'An error occurred please try again later',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findOne(id: string) {
    try {
      const user = await this.usersRepository.findOne({
        where: {
          id: id,
        },
      });

      if (!user) {
        throw new NotFoundException('User not found!');
      }

      return instanceToPlain(user);
    } catch (error) {
      console.log(error);

      throw new InternalServerErrorException('Something went wrong');
    }
  }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
