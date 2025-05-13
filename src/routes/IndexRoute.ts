import { Router } from "express";
import UserRoute from "./UserRoute";
import GroupRoute from "./GroupRoute"
import CourseRoute from "./CourseRoute";
import UserGroupRoute from "./UserGroupRoute"

const router = Router();

router.use("/user", UserRoute);
router.use("/group",GroupRoute)
router.use("/userGroup" , UserGroupRoute) ; 
router.use("/course", CourseRoute);


export default router;