import Express from "express";
import Router from "./routes/IndexRoute";
const app = Express();

app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));


app.use("/api", Router);

app.listen(process.env.APP_PORT, () => {
  console.log(`Server is running on port ${process.env.APP_PORT}`);
});
