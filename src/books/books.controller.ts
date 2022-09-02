import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('books')
export class BooksController {
  @Get()
  getBook() {
    return 'Hello Workl';
  }
  @Get('/:name')
  getBookById(@Param('name') name: string) {
    return `Hello ${name}`;
  }

  @Post()
  createBook(@Body() payload: any) {
    console.log(payload);

    return {
      payload,
    };
  }
}
