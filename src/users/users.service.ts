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
import { paginate } from 'src/utility/common/pagination.util';

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
    return paginate<UserEntity>(this.usersRepository, paginationDto);
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
