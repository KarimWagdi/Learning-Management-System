import { Router  } from "express";
import UserGroupController from "../controller/UserGroupController";
import requestValidator from "../middelware/RequestValidate";
import {  addUserGroupRequest } from "../Request/UserGroupRequest";

const router = Router();

router.get("/", UserGroupController.getUserGroup);

router.post("/", requestValidator(addUserGroupRequest), UserGroupController.addUserGroup);
router.delete("/:id" , UserGroupController.deleteUserGroup) ; 
router.put("/:id",  UserGroupController.updateUserGroup ) ; 

// router.post("/login", UserController.loginUser);

// router.put("/:id", UserController.updateUser);

// router.delete("/:id", UserController.deleteUser);

export default router;