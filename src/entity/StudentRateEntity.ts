import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm";


@Entity()
export class StudentRate {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  group_id!: number;

  @Column()
  instructor_id!: number;

  @Column()
  rate!: number;

  @Column()
  comment!: number;

  @CreateDateColumn({ type: "timestamp" })
  createdAt!: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updatedAt!: Date;

  @DeleteDateColumn({ nullable: true })
  deletedAt?: Date;
}