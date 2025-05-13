import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { UserGroup } from "./UserGroupEntity";

@Entity()
export class Group {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ default: 0 }) // Default value for number_of_student
  number_of_student!: number;

  @Column() // Default value for startDate
  startDate!: number;

  @Column() // Default value for endDate
  endDate!: number;

  @Column({ default: "" }) // Default value for courses
  courses!: string;

  @Column({ default: "" }) // Default value for review
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
