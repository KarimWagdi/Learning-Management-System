import { User } from "../entity/UserEntity";
import { Request, Response } from "express";
import { AppDataSource } from "../Config/dbConfig";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

function generateJWT(userId: number): string {
    return jwt.sign({ id: userId }, process.env.JWT_SECRET || 'your-secret-key', {
        expiresIn: '1h'
    });
}

export default class UserController {

  // Add a new user
public static addUser = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
       const userRepo = AppDataSource.getRepository(User);
       const hashedPassword = await bcrypt.hash(req.body.password, 10);
       const newUser = userRepo.create({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
        role: req.body.role,
        // imgUrl: req.body.imgUrl
       });

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
        if (req.body.name) user.name = req.body.name;
        if (req.body.email) user.email = req.body.email;
        if (req.body.role) user.role = req.body.role;
        if (req.body.imgUrl) user.imgUrl = req.body.imgUrl;
        if (req.body.password) {
          user.password = await bcrypt.hash(req.body.password, 10);
        }
        await userRepo.save(user);
        res.status(200).json(user);
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



public static loginUser = async (req: Request, res: Response): Promise<void> => {
try{
  console.log('Login request received');
  const {email, password} = req.body;

  if(!email || !password){
       res.status(400).json({message: "Email and password are required"});
       return;
  }
  const userRepo = AppDataSource.getRepository(User);
  const user = await userRepo.findOne({where: {email},select:['id', 'password']});

  if(!user){
    res.status(401).json({message: "Invalid credentials"});
    return;
  }
  const passwordMatch = await bcrypt.compare(password, user.password);

  if(!passwordMatch){
    res.status(401).json({message: "Invalid credentials"});
    return;
  }
  const token = generateJWT(user.id);

  res.status(200).json({token});
}catch(error){
  res.status(500).json({message: "Internal Server Error"});
}
};

public static logoutUser = async (req: Request, res: Response): Promise<void> => {
    try {
        // Clear the token from client-side storage
        res.clearCookie('token');       
        res.status(200).json({ message: "Logout successful" });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
};

}

