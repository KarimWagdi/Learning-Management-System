import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  JoinColumn,
  ManyToOne,
} from "typeorm";
import { User } from "./UserEntity";
import { Course } from './CourseEntity';

@Entity()
export class CourseRate {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: "user_id" })
  user_id!: User;

  @ManyToOne(() => Course, (course) => course.id)
  @JoinColumn({ name: "course_id" })
  course_id!: Course;

  @Column()
  rate!: string;

  @Column()
  comment!: string;

  @CreateDateColumn({ type: "timestamp" })
  createdAt!: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updatedAt!: Date;

  @DeleteDateColumn({ nullable: true })
  deletedAt?: Date;
}
