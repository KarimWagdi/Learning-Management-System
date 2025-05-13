import { Router } from "express";
import UserRoute from "./UserRoute";
import GroupRateRoute from "./GroupRateRoute";

import  UserAttachRoute  from "./UserAttachRoute";

import GroupRoute from "./GroupRoute"
import CourseRoute from "./CourseRoute";
import UserGroupRoute from "./UserGroupRoute"


const router = Router();

router.use("/user", UserRoute);
router.use("/group-rates", GroupRateRoute)
router.use("/userAttach",UserAttachRoute);
router.use("/group",GroupRoute)
router.use("/userGroup" , UserGroupRoute) ; 
router.use("/course", CourseRoute);



export default router;