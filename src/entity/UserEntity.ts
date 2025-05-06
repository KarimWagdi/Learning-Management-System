import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm";

export enum UserRole {
    ADMIN = "admin",
    INSTRUCTOR = "instructor",
    STUDENT = "student",
}

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column({ unique: true, nullable: false })
    email!: string;

    @Column()
    password!: string;

    @Column()
    role!: UserRole;

    @Column({ nullable: true })
    imgUrl?: string;

    @CreateDateColumn({ type: "timestamp" })
    createdAt!: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updatedAt!: Date;   

    @DeleteDateColumn({ nullable: true })
    deletedAt?: Date;
}
