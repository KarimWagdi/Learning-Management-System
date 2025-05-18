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

  @OneToOne(() => User, (user) => user.id)
  @JoinColumn(({ name: "user_id" }))
  user_id!: User;
  
  @Column()
  img_id_front!: string;

  @Column()
  img_id_back!: string;

  @Column()
  salary!: number;

  @Column()
  mobile_number!: number;

  @CreateDateColumn({ type: "timestamp" })
  createdAt!: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updatedAt!: Date;

  @DeleteDateColumn({ nullable: true })
  deletedAt?: Date;
}

// object copy it in body for test 
// {
//     "img_id_front": "karimfront.png",
//     "img_id_back": "karimback.png",
//     "mobile_number": 1234567890
// }
