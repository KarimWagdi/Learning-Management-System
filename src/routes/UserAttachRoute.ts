import { Router } from "express";
import  UserAttachController from "../controller/UserAttachController";
const router = Router();

router.get("/", UserAttachController.getUserAttach);

router.post("/", UserAttachController.addUser)



export default router;