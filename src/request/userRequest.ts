import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, Length } from "class-validator";
import { UserRole } from "../entity/UserEntity";

export class addUserRequest {
    @IsString()
    @IsNotEmpty()
    name!: string;

    @IsEmail()
    @IsNotEmpty()
    @IsString()
    email!: string;

    @IsString()
    @IsNotEmpty()
    @Length(6, 20)
    password!: string;

    @IsEnum(UserRole)
    @IsNotEmpty()
    role!: UserRole;
}   

export class loginUserRequest {
    @IsEmail()
    @IsNotEmpty()
    @IsString()
    email!: string;

    @IsString()
    @IsNotEmpty()
    password!: string;
}

export class updateUserRequest {
    @IsString()
    @IsOptional()
    name?: string;

    @IsEmail()
    @IsOptional()
    email?: string;

    @IsString()
    @IsOptional()
    password?: string;

    @IsEnum(UserRole)
    @IsOptional()
    role?: UserRole;
}   