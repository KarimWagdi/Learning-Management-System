import { IsNotEmpty, IsNumber, IsOptional } from "class-validator";
import { Course } from "../entity/CourseEntity";


export class addInstructorRate {
    @IsNotEmpty()
    @IsNumber()
    course_id!: Course

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