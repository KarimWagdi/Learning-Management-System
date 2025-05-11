import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
  } from "typeorm";
  
  @Entity()
  export class UserAttach {
    @PrimaryGeneratedColumn()
    id!: number;


  
    @Column()
    user_id!: number;
  
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
  