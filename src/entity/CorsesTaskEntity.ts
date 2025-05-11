import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm";


@Entity()
export class CorsesTask {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    corse_id!: number;

    // @Column()
    // task_id!: number;

    @CreateDateColumn({type: "timestamp" })
    createdAt!: Date;

    @UpdateDateColumn({type: "timestamp" })
    updatedAt!: Date;

    @DeleteDateColumn({type: "timestamp" })
    deletedAt!: Date;
}