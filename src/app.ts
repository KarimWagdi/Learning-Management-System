import  Express  from "express";
import { AppDataSource } from"./Config/dbConfig";
import  Router from "./routes/IndexRoute";
const app = Express();


app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

app.use("/api", Router);


AppDataSource.initialize()
  .then(() => {
    app.listen(process.env.APP_PORT, () => {
      console.log(`Server is running on port ${process.env.APP_PORT}`);
    });
  })
  .catch((err: Error) => {
    console.error("Error during Data Source initialization", err);
  });


