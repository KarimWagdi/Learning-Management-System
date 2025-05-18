import { Router } from "express";
import UserController from "../controller/UserController";
import requestValidator from "../middelware/RequestValidate";
import { addUserRequest } from "../Request/UserRequest";
const router = Router();

router.get("/", UserController.getUser);

router.post("/login", UserController.loginUser);

router.get('/:id', UserController.getUserById)
router.post("/", requestValidator(addUserRequest), UserController.addUser);

router.delete("/:id", UserController.deleteUser);
router.put("/:id", UserController.updateUser);


export default router;