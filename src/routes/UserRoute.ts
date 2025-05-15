import { Router } from "express";
import UserController from "../controller/UserController";
const router = Router();

router.get("/", UserController.getUser);
router.get('/:id', UserController.getUserById)
router.post("/", UserController.addUser);
router.delete("/:id", UserController.deleteUser);
router.put("/:id", UserController.updateUser);


router.post('/login', UserController.loginUser);
router.post('/logout', UserController.logoutUser);

export default router;