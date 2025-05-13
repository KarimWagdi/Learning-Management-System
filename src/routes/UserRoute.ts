import { Router } from "express";
import UserController from "../controller/UserController";
const router = Router();

router.get("/", UserController.getUser);
router.get('/:id', UserController.getOneUser)
router.post("/", UserController.addUser);
router.delete("/:id", UserController.deleteUser);
router.put("/:id", UserController.updateUser);


export default router;