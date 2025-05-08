
import { Column, CreateDateColumn, DeleteDateColumn, Entity,  PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Group{
    @PrimaryGeneratedColumn()
    number_of_student!:number;

    @Column()
    startDate!: number;

    @Column()
    endDate!:number;

    @Column()
    courses!:string;

    @Column()
    review!:string;

    @CreateDateColumn({ type: "timestamp" })
    createdAt!: Date;
    
    @UpdateDateColumn({ type: "timestamp" })
    updatedAt!: Date;   
    
    @DeleteDateColumn({ nullable: true })
    deletedAt?: Date;
}