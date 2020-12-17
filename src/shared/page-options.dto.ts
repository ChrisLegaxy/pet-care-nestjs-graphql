import { Type } from 'class-transformer';
import {
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Max,
  Min
} from 'class-validator';

enum Order {
  ASC = 'ASC',
  DESC = 'DESC'
}

export class PageOptionsDto {
  @IsEnum(Order)
  @IsOptional()
  readonly order: Order = Order.ASC;

  @Type(() => Number)
  @IsInt()
  @Min(1)
  @IsOptional()
  readonly page: number = 1;

  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(50)
  @IsOptional()
  readonly limit: number = 10;

  get skip(): number {
    return (this.page - 1) * this.limit;
  }

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  readonly q?: string;
}
