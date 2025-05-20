import "reflect-metadata";
import dotenv from "dotenv";
import { UserGroup } from '../entity/UserGroupEntity';
import { DataSource } from "typeorm";
import { User } from "../entity/UserEntity";
import { CourseTask } from "../entity/CourseTaskEntity";
import { UserAttach } from '../entity/UserAttachEntity'
import { Group } from "../entity/GroupEntity";
import { GroupRate } from "../entity/GroupRateEntity";
import { Course } from '../entity/CourseEntity';
import { Category } from "../entity/CategoryEntity";
import { CategoryCourse } from "../entity/CategoryCourseEntity";
import { SubCategory } from "../entity/SubCategoryEntity";
import { InstructorRate } from "../entity/InstructorRateEntitiy";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 3306,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: false,
  entities: [User, Course, CourseTask, UserAttach, UserGroup, Group, GroupRate, Category, CategoryCourse, SubCategory, InstructorRate],
  migrations: [],
  subscribers: [],
});

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err: Error) => {
    console.error("Error during Data Source initialization", err);
  });
