import { Router } from "express";
import UserRoute from "./UserRoute";
import GroupRateRoute from "./GroupRateRoute";
import UserAttachRoute from "./UserAttachRoute";
import GroupRoute from "./GroupRoute"
import CourseRoute from "./CourseRoute";
import UserGroupRoute from "./UserGroupRoute"
import CategoryRoute from './CategoryRoute'
import SubCategoryRoute from "./SubCategoryRoute";



const router = Router();

router.use("/user", UserRoute);
router.use("/group-rates", GroupRateRoute)
router.use("/userAttach", UserAttachRoute);
router.use("/group", GroupRoute)
router.use("/userGroup", UserGroupRoute);
router.use("/course", CourseRoute);
router.use("/category", CategoryRoute);
router.use("/subCategory", SubCategoryRoute);




export default router;