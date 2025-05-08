
import { Column, Entity,  PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class _Group{
    @PrimaryGeneratedColumn()
    NumberOfStudent!:number;

    @Column()
    StartDate!: number;

    @Column()
    EndDate!:number;

    @Column()
    Courses!:string;

    @Column()
    Review!:string;
}