import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { User } from "./UserEntity";

@Entity()
export class UserAttach {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  img_id_front!: string;

  @Column()
  img_id_back!: string;

  @Column()
  salary!: number;

  @Column()
  mobile_number!: number;

  @OneToOne(() => User, (user) => user.id)
  @JoinColumn(({ name: "user_id" }))
  user_id!: number;

  @CreateDateColumn({ type: "timestamp" })
  createdAt!: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updatedAt!: Date;

  @DeleteDateColumn({ nullable: true })
  deletedAt?: Date;
}
