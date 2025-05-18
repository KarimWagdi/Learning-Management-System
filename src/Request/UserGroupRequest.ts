import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { User } from "../entity/UserEntity";
import { Group } from "../entity/GroupEntity";


export class addUserGroupRequest {
    @IsNumber()
    @IsNotEmpty()
    id!: Number ; 

    @IsNumber()
    @IsNotEmpty()
    group_id!: Group ; 

    @IsNumber()
    @IsNotEmpty()
    user_id!: User ; 


}

