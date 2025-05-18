import { Router } from "express";
import UserController from "../controller/UserController";
import requestValidator from "../middelware/RequestValidate";
import { addUserRequest } from "../request/userRequest";
const router = Router();

router.get("/", UserController.getUser);
router.post("/login", UserController.getUser);
router.get('/:id', UserController.getUserById)
router.post("/", requestValidator(addUserRequest), UserController.addUser);
router.delete("/:id", UserController.deleteUser);
router.put("/:id", UserController.updateUser);


export default router;