import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { CourseTask } from "./CourseTaskEntity";
import { Category } from "./CategoryEntity";

@Entity()
export class Course {
  @PrimaryGeneratedColumn()
  id!: number;

  @OneToMany(() => Category, (category) => category.id)
  @JoinColumn({ name: "category_id" })
  category_id!: Category;

  @Column()
  imageUrl!: string;

  @Column()
  duration!: string;

  @Column()
  rate!: number;

  @Column()
  details!: string;

  @Column()
  videoUrl!: string;

  @CreateDateColumn({ type: "timestamp" })
  createdAt!: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updatedAt!: Date;

  @DeleteDateColumn({ nullable: true })
  deletedAt?: Date;

  @OneToMany(() => CourseTask, (courseTask) => courseTask.course_id)
  courseTask!: CourseTask[];
}
