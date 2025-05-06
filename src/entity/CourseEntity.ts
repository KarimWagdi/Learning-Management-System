import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Course {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    imageUrl!: string

    @Column()
    duration!: string

    @Column()
    rate!: number

    @Column()
    details!: string

    @Column()
    videoUrl!: string

    @CreateDateColumn()
    createdAt!: Date

    @UpdateDateColumn()
    updatedAt!: Date

    @DeleteDateColumn()
    deletedAt!: Date
}