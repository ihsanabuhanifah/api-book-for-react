import { Transform, Type } from 'class-transformer';
import { IsInt, IsOptional, IsBoolean } from 'class-validator';

export class FilterBookDto {
  @IsOptional()
  title: string;
  @IsOptional()
  author: string;
  @IsOptional()
  category: string;
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  min_year: number;
  @IsOptional()
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  max_year: number;
  @IsOptional()
  @IsBoolean()
  @Transform(({ value }) => {
    if (value === 'true') return true;
    if (value === 'false') return false;
    return value;
  })
  isBestSeller: boolean;
}
