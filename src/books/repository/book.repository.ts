import { InternalServerErrorException } from '@nestjs/common';
import { CustomRepository } from 'src/database/typeorm-ex.decorator';
import { Repository } from 'typeorm';
import { CreateBookDto } from '../dto/create-book.dto';
import { FilterBookDto } from '../dto/filter-book.dto';

import { Book } from '../entity/book.entity';

@CustomRepository(Book)
export class BookRepository extends Repository<Book> {
  async getBooks(filter: FilterBookDto): Promise<Book[]> {
    const { title, author, category, min_year, max_year, isBestSeller } =
      filter;

    const query = this.createQueryBuilder('book');

    if (title) {
      query.andWhere('lower(book.title) LIKE :title', {
        title: `%${title.toLowerCase()}%`,
      });
    }
    if (isBestSeller) {
      query.andWhere('book.isBestSeller =  :isBestSeller', {
        isBestSeller,
      });
    }

    if (author) {
      query.andWhere('lower(book.author) LIKE :author', {
        author: `%${author.toLowerCase()}`,
      });
    }

    if (category) {
      query.andWhere('lower(book.category) LIKE :category', {
        category: `%${category.toLowerCase()}`,
      });
    }

    if (min_year) {
      query.andWhere('book.year >= :min_year', { min_year });
    }

    if (max_year) {
      query.andWhere('book.year <= :max_year', { max_year });
    }

    return await query.getMany();
  }

  async createBook(createBookDto: CreateBookDto): Promise<void> {
    const { title, author, category, year, isBestSeller } = createBookDto;

    const book = this.create();
    book.title = title;
    book.author = author;
    book.category = category;
    book.year = year;
    book.isBestSeller = isBestSeller;

    try {
      await book.save();
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }
}
