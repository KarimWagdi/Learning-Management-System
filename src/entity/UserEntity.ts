import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToOne, OneToMany } from "typeorm";
import { UserAttach } from "./UserAttachEntity";
import { UserGroup } from "./UserGroupEntity";
import { CourseTask } from "./CourseTaskEntity";

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

    @Column({ nullable: true })
    token?: string

    @CreateDateColumn({ type: "timestamp" })
    createdAt!: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updatedAt!: Date;

    @DeleteDateColumn({ nullable: true })
    deletedAt?: Date;

    @OneToOne(() => UserAttach, (userAttach) => userAttach.user_id)
    userAttach!: UserAttach;

    @OneToMany(() => UserGroup, (userGroup) => userGroup.user_id)
    userGroup!: UserGroup[];

    @OneToMany(() => CourseTask, (courseTask) => courseTask.user_id)
    courseTask!: CourseTask[]
}
