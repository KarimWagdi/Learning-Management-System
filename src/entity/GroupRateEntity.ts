import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Group } from "./GroupEntity";
import { User } from "./UserEntity";

@Entity()
export class GroupRate {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: "user_id" })
  user_id!: User;

  @ManyToOne(() => Group, (group) => group.id)
  @JoinColumn({ name: "group_id" })
  group_id!: Group;

  @Column({ type: "int", width: 1 })
  rate!: number;

  @Column("text")
  comment!: string;

  @CreateDateColumn({ type: "timestamp" })
  createdAt!: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updatedAt!: Date;

  @DeleteDateColumn({ nullable: true })
  deletedAt?: Date;
}
