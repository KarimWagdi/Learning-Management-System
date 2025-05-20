import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm";


@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  group_id!: number;

  @Column()
  instructor_id!: number;

  @Column()
  rate_id!: number;

  @Column()
  comment_id!: number;

  @Column()
  update_id!: number;

  @CreateDateColumn({ type: "timestamp" })
  createdAt!: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updatedAt!: Date;

  @DeleteDateColumn({ nullable: true })
  deletedAt?: Date;
}