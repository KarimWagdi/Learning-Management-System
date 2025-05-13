import { Router } from "express";
import UserRoute from "./UserRoute";
import CourseRoute from "./CourseRoute";

const router = Router();

router.use("/user", UserRoute);
router.use("/course", CourseRoute);


export default router;