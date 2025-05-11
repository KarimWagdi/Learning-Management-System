import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, BeforeInsert } from "typeorm";



@Entity()
export class GroupRate { 
    @PrimaryGeneratedColumn()
    id!: number;   
                       
    @Column()
    user_id!: number;  

    @Column()
    group_id!: number; 

    @Column({ type: "int", width: 1 })
    rate!: number;  

    @Column("text")
    comment!: string;  

    @CreateDateColumn({ type: "timestamp" })
    createdAt!: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updatedAt!: Date;   

    @DeleteDateColumn({ nullable: true })
    deletedAt?: Date;
}