import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { CourseTask } from "./CourseTaskEntity";
import { CategoryCourse } from "./CategoryCourseEntity";

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

    @CreateDateColumn({ type: "timestamp" })
    createdAt!: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updatedAt!: Date;

    @DeleteDateColumn({ nullable: true })
    deletedAt?: Date;

    @OneToMany(() => CourseTask, (courseTask) => courseTask.course_id)
    courseTask!: CourseTask[]

    @OneToMany(() => CategoryCourse, (categoryCourse) => categoryCourse.course_id)
    categoryCourses!: CategoryCourse[]
}