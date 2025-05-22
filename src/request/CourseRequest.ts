import { IsNotEmpty, IsNumber, IsOptional, IsString, Length, MinLength } from "class-validator";
import { Category } from "../entity/CategoryEntity";


export class addCourseRequest {

    @IsNotEmpty()
    @IsString()
    category_id!: Category

    @IsNotEmpty()
    @IsString()
    imageUrl!: string

    @IsNotEmpty()
    @IsString()
    duration!: string

    @IsNotEmpty()
    @IsNumber()
    rate!: number

    @IsNotEmpty()
    @IsString()
    details!: string

    @IsNotEmpty()
    @IsString()
    videoUrl!: string
}

export class updateCourseRequest {
    @IsOptional()
    @IsNotEmpty()
    @IsString()
    imageUrl!: string

    @IsOptional()
    @IsNotEmpty()
    @IsString()
    duration!: string

    @IsOptional()
    @IsNotEmpty()
    @IsNumber()
    rate!: number

    @IsOptional()
    @IsNotEmpty()
    @IsString()
    details!: string

    @IsOptional()
    @IsNotEmpty()
    @IsString()
    videoUrl!: string
}

export class addCategory {
    @IsNotEmpty()
    @IsString()
    @Length(2, 20)
    categoryName!: string

    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    categoryDescription!: string

    @IsNotEmpty()
    @IsString()
    categoryImage!: string
}


export class updateCategory {
    @IsNotEmpty()
    @IsString()
    @Length(2, 20)
    @IsOptional()
    categoryName!: string

    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @IsOptional()
    categoryDescription!: string

    @IsNotEmpty()
    @IsString()
    @IsOptional()
    categoryImage!: string
}