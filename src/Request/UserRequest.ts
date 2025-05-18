import { IsEmail, IsEnum, IsNotEmpty, IsString, Length } from "class-validator";
import { UserRole } from "../entity/UserEntity";


export class addUserRequest{

    @IsString()
    @IsNotEmpty()
    name!:string ; 

    @IsEmail()
    @IsNotEmpty()
    @IsString()
    email!: string ; 

    @IsString()
    @IsNotEmpty()
    @Length(6,20)
    password!:string ;
    
    @IsEnum(UserRole)
    @IsNotEmpty()
    role!:UserRole ;

}   
