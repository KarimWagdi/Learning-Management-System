import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";




@Entity()
export class Invoices{

    @PrimaryGeneratedColumn()
    id!: number ;

    @Column()
    groupId!: number; 

    @Column()
    instructorId!: number ; 

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




