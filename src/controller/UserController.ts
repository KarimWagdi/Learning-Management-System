import { User } from "../entity/UserEntity";
import { Request, Response } from "express";
import { AppDataSource } from "../Config/dbConfig";

export default class UserController {
    // Add a new user
    public static addUser = async (req: Request, res: Response): Promise<void> => {
        try {
            const userRepo = AppDataSource.getRepository(User);
            const newUser = userRepo.create(req.body);
            await userRepo.save(newUser);
            res.status(201).json(newUser);
        } catch (error) {
            res.status(500).json({ message: "Internal Server Error" });
        }
    };

    public static getUser = async (req: Request, res: Response): Promise<void> => {
        try {
            const userRepo = AppDataSource.getRepository(User);
            const user = await userRepo.find();
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ message: "Internal Server Error" });
        }
    };
}