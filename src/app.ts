import  Express  from "express";
import { AppDataSource } from"./Config/dbConfig";

const app = Express();

AppDataSource.initialize()
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});