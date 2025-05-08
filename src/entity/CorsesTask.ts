import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm";


@Entity()
export class CorsesTask {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    corseId!: number;

    @Column()
    taskId!: number;
    @CreateDateColumn({type: "timestamp" })
    createdAt!: Date;
    @UpdateDateColumn({type: "timestamp" })
    updatedAt!: Date;
    @DeleteDateColumn({type: "timestamp" })
    deletedAt!: Date;
    
}