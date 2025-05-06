import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    ManyToOne,
    JoinColumn,
    OneToOne
  } from "typeorm";
  import { User } from "./UserEntity"; // Adjust path as needed
  
  @Entity()
  export class UserAttach {
    @PrimaryGeneratedColumn()
    id!: number;
  
    @OneToOne(() => User)
    @JoinColumn({ name: "userId" }) // Creates foreign key column 'userId'
    user!: User;
  
    @Column()
    idFront!: string;
  
    @Column()
    idBack!: string;
  
    @Column()
    salary!: number;
  
    @Column()
    mobileNumber!: number;
  }
  