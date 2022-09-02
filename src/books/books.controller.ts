import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Query,
  Delete,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { FilterBookDto } from './dto/filter-book.dto';
import { Book } from './entity/book.entity';
import { UUIDValidationPipe } from './pipes/uuid-validation.pipe';

@Controller('books')
export class BooksController {
  //   private bookService: BooksService;
  //   constructor(bookService: BooksService) {
  //     this.bookService = bookService;
  //   }

  constructor(private booksService: BooksService) {}
  @Get()
  async getBooks(@Query() filter: FilterBookDto): Promise<Book[]> {
    return await this.booksService.getBooks(filter);
  }

  @Get('/:id')
  async getBookById(@Param('id', UUIDValidationPipe) id: any): Promise<Book> {
    return this.booksService.getBookById(id);
  }
  @Post()
  async createBook(@Body() payload: CreateBookDto): Promise<any> {
    await this.booksService.createBook(payload);
    return {
      msg: 'Success',
    };
  }

  @Put('/update/:id')
  async updateBook(
    @Param('id', UUIDValidationPipe) id: string,
    @Body() payload: CreateBookDto,
  ): Promise<any> {
    return process.env.DB_HOST;
    return await this.booksService.updateBook(id, payload);
  }

  @Delete('/delete/:id')
  async deleteBook(@Param('id', UUIDValidationPipe) id: string): Promise<void> {
    return this.booksService.deleteBook(id);
  }
}
