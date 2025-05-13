import { Router } from "express";
import UserRoute from "./UserRoute";
import GroupRateRoute from "./GroupRateRoute";

const router = Router();

router.use("/user", UserRoute);

router.use("/group-rates", GroupRateRoute)

export default router;