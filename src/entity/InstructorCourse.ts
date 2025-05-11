import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class InstructorCourse {
    @PrimaryGeneratedColumn()
    id!:number

    @Column()
    course_id!:number

    @Column()
    instructor_id!: number

    @CreateDateColumn({ type: "timestamp" })
    createdAt!: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updatedAt!: Date;   

    @DeleteDateColumn({ nullable: true })
    deletedAt?: Date;
}