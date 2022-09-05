import { Type } from 'class-transformer';
import { IsBoolean, IsInt, isNotEmpty, IsNotEmpty } from 'class-validator';

export class CreateBookDto {
  @IsNotEmpty()
  title: string;
  @IsNotEmpty()
  author: string;
  @IsNotEmpty()
  category: string;
  @IsBoolean()
  isBestSeller: boolean;
  @IsNotEmpty()
  @IsInt()
  @Type(() => Number)
  year: number;
}
