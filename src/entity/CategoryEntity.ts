import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { CategoryCourse } from "./CategoryCourseEntity";

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id!: number

    @Column({ unique: true, nullable: false })
    categoryName!: string

    @Column({ nullable: false })
    categoryDescription!: string

    @Column({ nullable: false })
    categoryImage!: string

    @CreateDateColumn({ type: 'timestamp' })
    createdAt!: Date

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt!: Date

    @DeleteDateColumn({ nullable: true })
    deletedAt?: Date

    @OneToMany(() => CategoryCourse, (categoryCourse) => categoryCourse.category_id)
    categoryCourses!: CategoryCourse[]
}