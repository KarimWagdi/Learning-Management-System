import { Router } from "express";
import UserRoute from "./UserRoute";
import GroupRoute from "./GroupRoute"

const router = Router();

router.use("/user", UserRoute);
router.use("/group",GroupRoute)

export default router;