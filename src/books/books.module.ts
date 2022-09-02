import { Module } from '@nestjs/common';
import { TypeOrmExModule } from 'src/database/typeorm-ex.module';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { BookRepository } from './repository/book.repository';

@Module({
  imports: [TypeOrmExModule.forCustomRepository([BookRepository])],
  controllers: [BooksController],
  providers: [BooksService],
})
export class BooksModule {}
