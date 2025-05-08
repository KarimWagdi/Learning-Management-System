import  Express  from "express";
import { AppDataSource } from"./Config/dbConfig";

const app = Express();
const PORT = 3000;

AppDataSource.initialize()
  .then(() => {
    app.listen(process.env.APP_PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err: Error) => {
    console.error("Error during Data Source initialization", err);
  });


