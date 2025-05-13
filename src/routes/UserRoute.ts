import { Router } from "express";
import UserController from "../controller/UserController";
const router = Router();

router.get("/", UserController.getUser);
router.get("/:id", UserController.readsingleUser)
router.post("/", UserController.addUser);
router.put("/:id", UserController.updateUser);
router.delete("/:id", UserController.deleteuser)

// router.post("/login", UserController.loginUser);

// router.put("/:id", UserController.updateUser);

// router.delete("/:id", UserController.deleteUser);

export default router;