import {
  IsNotEmpty,
  IsNumber,
  IsString,
  Length,
  IsUrl,
  MaxLength,
  Min,
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
} from "class-validator";

export class SubCategoryRequest {
  @IsNotEmpty()
  @IsString()
  @Length(3, 50, { message: 'Name must be between 3 and 50 characters' })
  name!: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(500, { message: 'Description cannot exceed 500 characters' })
  description!: string;

  @IsNotEmpty()
  @IsUrl({}, { message: 'NextWebPage must be a valid URL' })
  nextWebPageLink!: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(0, { message: 'Sequence must be a positive number' })
  sequence!: number;
}
