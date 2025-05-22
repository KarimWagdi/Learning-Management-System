import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  JoinColumn,
  OneToOne,
} from "typeorm";
import { Course } from "./CourseEntity";

@Entity()
export class Lecture {
  @PrimaryGeneratedColumn()
  id!: number;

  // @OneToOne(() => Course)
  // @JoinColumn({ name: "course_id" })
  // course!: Course;

  @Column()
  task!: string;

  @Column()
  duration!: number; // Duration in minutes (or seconds, depending on your requirement)

  // Timestamp when the subcategory was created
  @CreateDateColumn({ type: "timestamp" })
  createdAt!: Date;

  // Timestamp when the subcategory was last updated
  @UpdateDateColumn({ type: "timestamp" })
  updatedAt!: Date;

  // Timestamp when the subcategory was deleted (soft delete)
  @DeleteDateColumn({ nullable: true })
  deletedAt?: Date;
}
