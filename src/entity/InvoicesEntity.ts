import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "./UserEntity";



@Entity()
export class Invoices{

    @PrimaryGeneratedColumn()
    id!: number ;

        
    @Column()
    groupId!: number; 

    @ManyToOne(()=> User , (user) => user.id)
    @JoinColumn({name:"instructorId"})
    @Column()
    instructorId!: User  ; 

    @Column()
    topicId!:number ; 

    @Column()
    lecNum!:number ;

    @Column()
    rate!:number ; 

    @Column()
    hoursNum!: number ; 

    @Column()
    totalCash!: number ; 

    @CreateDateColumn({type:"timestamp"})
    createdAt!:Date ; 

    @UpdateDateColumn({type:"timestamp"})
    updateAt!:Date ; 

    @DeleteDateColumn({nullable:true})
    deletedAt?:Date ; 

}




