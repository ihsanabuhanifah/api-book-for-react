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
  async getBookById(@Param('id', UUIDValidationPipe) id: any): Promise<any> {
    const buku = await this.booksService.getBookById(id);
    return {
      status: 'Success',
      message: 'Buku Ditemukan',
      buku: buku,
    };
  }
  @Post()
  async createBook(@Body() payload: CreateBookDto): Promise<any> {
    await this.booksService.createBook(payload);
    return {
      status: 'Success',
      message: 'Buku Berhasil Disimpan',
    };
  }

  @Put('/update/:id')
  async updateBook(
    @Param('id', UUIDValidationPipe) id: string,
    @Body() payload: CreateBookDto,
  ): Promise<any> {
    await this.booksService.updateBook(id, payload);
    return {
      status: 'Success',
      message: 'Buku Berhasil Diperbaharui',
    };
  }

  @Delete('/delete/:id')
  async deleteBook(@Param('id', UUIDValidationPipe) id: string): Promise<any> {
    await this.booksService.deleteBook(id);
    return {
      status: 'Success',
      message: 'Buku Berhasil Dihapus',
    };
  }
}
