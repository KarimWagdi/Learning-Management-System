
import { UserGroup } from '../entity/UserGroupEntity';
import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "../entity/UserEntity";
import { CorsesTask } from "../entity/CorsesTaskEntity";
import dotenv from "dotenv";
import {UserAttach} from '../entity/UserAttachEntity'
import { Group } from "../entity/GroupEntity";
import { GroupRate } from "../entity/GroupRateEntity"; 

dotenv.config();

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 3306,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: false,
  logging: false,
  entities: [User, CorsesTask,UserAttach, UserGroup, Group, GroupRate],
  migrations: [],
  subscribers: [],
});

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
})
  .catch((err: Error) => {
    console.error("Error during Data Source initialization");
});
