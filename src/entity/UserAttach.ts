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
  // import { User } from "./UserEntity"; // Adjust path as needed
  
  @Entity()
  export class UserAttach {
    @PrimaryGeneratedColumn()
    id!: number;
  
    // @OneToOne(() => User)
    // @JoinColumn({ name: "userId" }) // Creates foreign key column 'userId'
    // @Column()
    // user!: User;
  
    @Column()
    idFront!: string;
  
    @Column()
    idBack!: string;
  
    @Column()
    salary!: number;
  
    @Column()
    mobileNumber!: number;

    @CreateDateColumn({ type: "timestamp" })
    createdAt!: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updatedAt!: Date;   

    @DeleteDateColumn({ nullable: true })
    deletedAt?: Date;


  }
  