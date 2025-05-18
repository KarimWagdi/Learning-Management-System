import { CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Course } from "./CourseEntity";
import { Category } from "./CategoryEntity";


@Entity()
export class CategoryCourse {
    @PrimaryGeneratedColumn()
    id!: number

    @ManyToOne(() => Category, (category) => category.id)
    @JoinColumn({ name: 'category_id' })
    category_id!: Category

    @ManyToOne(() => Course, (course) => course.id)
    @JoinColumn({ name: 'course_id' })
    course_id!: Course

    @CreateDateColumn({ type: "timestamp" })
    createdAt!: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updatedAt!: Date;

    @DeleteDateColumn({ nullable: true })
    deletedAt?: Date;
}