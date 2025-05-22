import { Course } from './CourseEntity';
import { Column, Entity ,PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn,DeleteDateColumn} from "typeorm";

@Entity()
export class CourseRate{
    @PrimaryGeneratedColumn()
    id!:number

    @Column()
    user_id!:number;

    @Column()
    course_id!:number;

    @Column()
    rate!:string;

    @Column()
    comment!:string

    @CreateDateColumn({ type: "timestamp" })
        createdAt!: Date;
    
        @UpdateDateColumn({ type: "timestamp" })
        updatedAt!: Date;
    
        @DeleteDateColumn({ nullable: true })
        deletedAt?: Date;
}
