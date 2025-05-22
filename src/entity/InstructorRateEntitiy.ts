import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { Course } from "./CourseEntity";
import { User } from "./UserEntity";

@Entity()
export class InstructorRate {
    @PrimaryGeneratedColumn()
    id!:number

    @ManyToOne(() => User, (user) => user.id)
    @JoinColumn({ name: "user_id" })
    instructor_id!: User
    
    @ManyToOne(() => Course, (course) => course.id)
    @JoinColumn({ name: "course_id" })
    course_id!:Course

    @CreateDateColumn({ type: "timestamp" })
    createdAt!: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updatedAt!: Date;   

    @DeleteDateColumn({ nullable: true })
    deletedAt?: Date;
}