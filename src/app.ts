import  Express  from "express";
import { AppDataSource } from"./Config/dbConfig";

const app = Express();


AppDataSource.initialize()
  .then(() => {
    app.listen(process.env.APP_PORT, () => {
      console.log(`Server is running on port ${process.env.APP_PORT}`);
    });
  })
  .catch((err: Error) => {
    console.error("Error during Data Source initialization", err);
  });


