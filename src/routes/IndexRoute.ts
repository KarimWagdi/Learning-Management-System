import { Router } from "express";
import UserRoute from "./UserRoute";
import { Group } from "../entity/GroupEntity";
import  UserAttachRoute  from "./UserAttachRoute";

const router = Router();

router.use("/user", UserRoute);
router.use("/userAttach",UserAttachRoute);
export default router;