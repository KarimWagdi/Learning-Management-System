import { Entity , PrimaryGeneratedColumn , Column } from "typeorm";


@Entity()
export class UserGroup{
    @PrimaryGeneratedColumn()
    id!:number ; 

    @Column()
    userId! : number ; 

    @Column()
    groupId!:number; 
    

}