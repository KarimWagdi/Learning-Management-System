import { Router } from "express";
import UserRoute from "./UserRoute";
import UserGroupRoute from "./UserGroupRoute"
const router = Router();

router.use("/user", UserRoute);
router.use("/userGroup" , UserGroupRoute  ) ; 

export default router;