import { Entity , PrimaryGeneratedColumn , Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm";


@Entity()
export class UserGroup{
    @PrimaryGeneratedColumn()
    id!:number ; 

    @Column()
    userId! : number ; 

    @Column()
    groupId!:number; 
    
    @CreateDateColumn({type:"timestamp"} ) 
    createdAt!: Date ; 

    @UpdateDateColumn({type:"timestamp"})
    updatedAt!: Date ; 

    @DeleteDateColumn({nullable:true})
    deletedAt?: Date ; 
}