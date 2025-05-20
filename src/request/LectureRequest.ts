import {
  IsNotEmpty,
  IsNumber,
  IsString,
  Length,
  IsUrl,
  MaxLength,
  Min,
} from "class-validator";

export class LectureRequest {

  @IsNotEmpty()
  @IsString()
  @Length(3, 50, { message: 'Name must be between 3 and 50 characters' })
  task!: string;

@IsNotEmpty()
@IsNumber()
@Min(1, { message: 'Duration must be at least 1 minute' })
duration!: number;

}

