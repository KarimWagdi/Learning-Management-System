import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  JoinColumn,
} from "typeorm";
import { User } from "./UserEntity";
// import { Category } from "./Category";

@Entity()
export class SubCategory {
  @PrimaryGeneratedColumn()
  id!: number;

  // Many-to-One with User: Multiple subcategories can belong to one user
  // This relationship tracks the owner of the subcategory
  // Foreign key: user_id references User.id
  @ManyToOne(() => User)
  @JoinColumn({ name: "user_id" })
  user!: User;

  // Many-to-One with User: Multiple subcategories can be created by one user
  // This relationship tracks the creator of the subcategory
  // Foreign key: created_by references User.id
  @ManyToOne(() => User)
  @JoinColumn({ name: "created_by" })
  createdBy!: User;

  // Many-to-One with User: Multiple subcategories can be updated by one user
  // This relationship tracks the last updater of the subcategory
  // Foreign key: updated_by references User.id
  @ManyToOne(() => User)
  @JoinColumn({ name: "updated_by" })
  updatedBy!: User;

  // Many-to-One with Category: Multiple subcategories can belong to one category
  // This relationship establishes the parent-child hierarchy
  // Foreign key: category_id references Category.id
  // @ManyToOne(() => Category, (category) => category.subCategories)
  // @JoinColumn({ name: "category_id" })
  // category!: Category;

  // Name of the subcategory (required)
  @Column()
  name!: string;

  // Optional description of the subcategory
  @Column({ nullable: true })
  description?: string;

  // Optional link to the next webpage in the sequence
  @Column({ nullable: true })
  nextWebPageLink?: string;

  // Sequence number for ordering subcategories
  @Column({ default: 0 })
  sequence!: number;

  // Timestamp when the subcategory was created
  @CreateDateColumn({ type: "timestamp" })
  createdAt!: Date;

  // Timestamp when the subcategory was last updated
  @UpdateDateColumn({ type: "timestamp" })
  updatedAt!: Date;

  // Timestamp when the subcategory was deleted (soft delete)
  @DeleteDateColumn({ nullable: true })
  deletedAt?: Date;
}
