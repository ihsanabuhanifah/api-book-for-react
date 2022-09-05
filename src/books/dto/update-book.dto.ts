import { Type } from 'class-transformer';
import { IsBoolean, IsInt, IsNotEmpty } from 'class-validator';

export class UpdateBookDto {
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
