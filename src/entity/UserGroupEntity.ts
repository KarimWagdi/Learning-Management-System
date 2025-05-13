import { Entity , PrimaryGeneratedColumn , CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { Group } from "./GroupEntity";
import { User } from "./UserEntity";


@Entity()
export class UserGroup{
    @PrimaryGeneratedColumn()
    id!:number ; 

    @ManyToOne(() => User , (user) => user.id)
    @JoinColumn({ name: "user_id" })
    user_id! : number ; 

    @ManyToOne(() => Group , (group) => group.id)
    @JoinColumn({ name: "group_id" })
    group_id!:number; 
    
    @CreateDateColumn({type:"timestamp"} ) 
    createdAt!: Date ; 

    @UpdateDateColumn({type:"timestamp"})
    updatedAt!: Date ; 

    @DeleteDateColumn({nullable:true})
    deletedAt?: Date ; 
}