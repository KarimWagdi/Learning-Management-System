import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { User } from "./UserEntity";
import { Course } from "./CourseEntity";


@Entity()
export class CourseTask {
    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToOne(() => Course, (course) => course.id)
    @JoinColumn({ name: 'course_id' })
    course_id!: Course;

    @ManyToOne(() => User, (user) => user.id)
    @JoinColumn({ name: 'user_id' })
    user_id!: User;

    @CreateDateColumn({ type: "timestamp" })
    createdAt!: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updatedAt!: Date;

    @DeleteDateColumn({ type: "timestamp" })
    deletedAt!: Date;
}