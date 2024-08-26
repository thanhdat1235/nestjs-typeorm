import { HttpException, HttpStatus } from '@nestjs/common';

export async function paginate<T>(
  repository: any,
  paginationDto: { page?: number; limit?: number } = {},
): Promise<{
  items: T[];
  totalItems: number;
  totalPages: number;
  currentPage: number;
  pageSize: number;
}> {
  const page = paginationDto.page ?? 1;
  const limit = paginationDto.limit ?? 10;

  if (page <= 0 || limit <= 0) {
    throw new HttpException(
      'Invalid pagination parameters',
      HttpStatus.BAD_REQUEST,
    );
  }

  try {
    const [items, totalItems] = await repository.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
    });

    const totalPages = Math.ceil(totalItems / limit);

    return {
      items,
      totalItems,
      totalPages,
      currentPage: page,
      pageSize: limit,
    };
  } catch (error) {
    console.log(error);
    throw new HttpException(
      'An error occurred, please try again later',
      HttpStatus.INTERNAL_SERVER_ERROR,
    );
  }
}
