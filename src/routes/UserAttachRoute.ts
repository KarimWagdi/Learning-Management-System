import { Router } from "express";
import UserAttachController from "../controller/UserAttachController";
import { AddUserAttachRequest } from "./request/AddUserAttachRequest";
import requestValidator from "../middelware/RequestValidate";

const router = Router();

router.get("/", UserAttachController.getUserAttach);
// with validation
// router.post("/", requestValidator(AddUserAttachRequest ), UserAttachController.addUser);
// without validation
router.post("/", UserAttachController.addUser);
router.get("/:id", UserAttachController.getUserAttachById);
router.put("/:id", UserAttachController.updateUserAttach);
router.delete("/:id", UserAttachController.deleteUserAttach);

export default router;