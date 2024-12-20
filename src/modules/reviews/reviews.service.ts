import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';

@Injectable()
export class ReviewsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createReviewDto: CreateReviewDto) {
    return this.prisma.review.create({
      data: createReviewDto,
    });
  }

  async findAll() {
    return this.prisma.review.findMany();
  }

  async findOne(id: number) {
    return this.prisma.review.findUnique({
      where: { review_id: id },
    });
  }

  async update(id: number, updateReviewDto: UpdateReviewDto) {
    return this.prisma.review.update({
      where: { review_id: id },
      data: updateReviewDto,
    });
  }

  async remove(id: number) {
    return this.prisma.review.delete({
      where: { review_id: id },
    });
  }
}
