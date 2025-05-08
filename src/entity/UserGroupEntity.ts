import { Entity , PrimaryGeneratedColumn , Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm";


@Entity()
export class UserGroup{
    @PrimaryGeneratedColumn()
    id!:number ; 

    @Column()
    user_id! : number ; 

    @Column()
    group_id!:number; 
    
    @CreateDateColumn({type:"timestamp"} ) 
    createdAt!: Date ; 

    @UpdateDateColumn({type:"timestamp"})
    updatedAt!: Date ; 

    @DeleteDateColumn({nullable:true})
    deletedAt?: Date ; 
}