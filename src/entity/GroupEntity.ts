
import { Column, CreateDateColumn, DeleteDateColumn, Entity,  OneToMany,  PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UserGroup } from "./UserGroupEntity";

@Entity()
export class Group{
    @PrimaryGeneratedColumn()
    id!:number;

    @Column()
    number_of_student!:number;

    @Column()
    startDate!: number;

    @Column()
    endDate!:number;

    @Column()
    courses!:string;

    @Column()
    review!:string;

    @CreateDateColumn({ type: "timestamp" })
    createdAt!: Date;
    
    @UpdateDateColumn({ type: "timestamp" })
    updatedAt!: Date;   
    
    @DeleteDateColumn({ nullable: true })
    deletedAt?: Date;

    @OneToMany(() => UserGroup, (userGroup) => userGroup.group_id)
    userGroup!: UserGroup[];
}