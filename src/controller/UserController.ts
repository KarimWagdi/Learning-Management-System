import { User } from "../entity/UserEntity";
import { Request, Response } from "express";
import { AppDataSource } from "../Config/dbConfig";

export default class UserController {
  // Add a new user

  public static addUser = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const { name, email, password, role, imgUrl } = req.body;
      const userRepo = AppDataSource.getRepository(User);
      const newUser = userRepo.create({ name, email, password, role, imgUrl });
      const emailExist = await userRepo.findOneBy({ email });
      if (emailExist) res.status(400).json({ message: "email already exist" });
      if (!newUser) res.status(400).json({ message: "error during create" });
      if (!newUser.imgUrl) newUser.imgUrl == null;

      await userRepo.save(newUser);
      res.status(200).json(newUser);
    } catch (error) {
      res.status(500).json({ message: "Internal Server Errors" });
    }
  };
  // Get all users

  public static getUser = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const userRepo = AppDataSource.getRepository(User);
      const user = await userRepo.find();
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  };

  public static getUserById = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const userRepo = AppDataSource.getRepository(User);
      const user = await userRepo.findOneBy({ id: parseInt(req.params.id) });
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ message: "User not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  };

  //update user
  public static updateUser = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const userRepo = AppDataSource.getRepository(User);
      const user = await userRepo.findOneBy({ id: parseInt(req.params.id) });
      if (user) {
        userRepo.merge(user, req.body);
      } else {
        res.status(404).json({ message: "User not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  };

  public static deleteUser = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const id = Number(req.params.id);
      const userRepo = AppDataSource.getRepository(User);
      const user = await userRepo.findOneBy({ id });
      if (!user) res.status(404).json({ message: "user not found" });
      await userRepo.delete(id);
      res.status(200).json({ message: "user deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "server error" });
    }
  };
}
