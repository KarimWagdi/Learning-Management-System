import { User } from "../entity/UserEntity";
import { Request, Response } from "express";
import { AppDataSource } from "../Config/dbConfig";

export default class UserController {
    // Add a new user
    public static addUser = async (req:Request, res:Response):Promise<void> =>{
        try{
            //AppDataSource this is likley main entry point to interact with your data base
            const userRepo = AppDataSource.getRepository(User);
            const newUser = userRepo.create(req.body)
            await userRepo.save(newUser)
            res.status(201).json(newUser);

        }catch(error){
            res.status(500).json({message: "Internal Server Error"})
        }
    }
    // Get all users

    public static getUser = async (req: Request, res: Response): Promise<void> => {
     try{
        const userRepo = AppDataSource.getRepository(User);
        const user = await userRepo.find();
        res.status(200).json(user);
     }catch (error){
        res.status(500).json({message: "Internal Server Error"});
     }
    };

    public static readsingleUser = async(req: Request, res: Response) : Promise <void> => {
        try{
            const userRepo = AppDataSource.getRepository(User);
            const user = await userRepo.findOneBy({id: parseInt(req.params.id)})
            if(user){
                res.status(200).json(user)
            }else{
                res.status(404).json({message : "User not found"})
            }

        }catch(error){
                res.status(500).json({message :  "Internal Server Error"})
            }
    }

    //update user
    public static updateUser = async (req:Request , res:Response):Promise<void> =>{
        try{
            const userRepo = AppDataSource.getRepository(User);
            const user = await userRepo.findOneBy({id: parseInt(req.params.id)});
            if(user){
                userRepo.merge(user, req.body)
            }else{
                res.status(404).json({message: "User not found"})
            }
        }catch(error){
            res.status(500).json({message: "Internal Server Error"})
    }
}

    public static deleteuser = async (req:Request, res:Response):Promise<void> => {
        try{
            const userRepo = AppDataSource.getRepository(User);
            const user = await userRepo.findOneBy({id: parseInt(req.params.id)})
            if(user){
              userRepo.delete(user)
              res.status(200).json({message : "User deleted successfully"})
            }
        }catch(error){
            res.status(500).json({message: "Internale server error"})
        }
    }

}
      



// object copy it in body for test 
// {
//     "name": "karim",
//     "email": "kimokomono74@gmail.com",
//     "password": "password",
//     "role": "teacher",
//     "createdAt": "2023-10-01T00:00:00.000Z",
//     "deletedAt": "2023-10-01T00:00:00.000Z"
// }