import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { UserGroup } from "./UserGroupEntity";
import { Course } from "./CourseEntity";
import { User } from "./UserEntity";

@Entity()
export class Group {
  @PrimaryGeneratedColumn()
  id!: number;

  @OneToMany(()=> Course, (course) => course.id ) 
  @JoinColumn({ name: "course_id" })
  course_id!: Course;

  @OneToMany(() => User, (user) => user.id)
  @JoinColumn({ name: "user_id" })
  user_id!: User;

  @Column()
  number_of_student!: number;

  @Column() 
  startDate!: number;

  @Column()
  endDate!: number;

  @Column({ default: "" })
  review!: string;

  @CreateDateColumn({ type: "timestamp" })
  createdAt!: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updatedAt!: Date;

  @DeleteDateColumn({ nullable: true })
  deletedAt?: Date;

  @OneToMany(() => UserGroup, (userGroup) => userGroup.group_id)
  userGroup!: UserGroup[];
}
