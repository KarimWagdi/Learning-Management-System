import { IsNotEmpty, IsNumber, IsOptional } from "class-validator";


export class addInstructorRate {
    @IsNotEmpty()
    @IsNumber()
    courseId!: number

    @IsNotEmpty()
    @IsNumber()
    instructorId!: number

}

export class updateInstructorRate {
    @IsOptional()
    @IsNotEmpty()
    @IsNumber()
    courseId!: number

    @IsOptional()
    @IsNotEmpty()
    @IsNumber()
    instructorId!: number
}