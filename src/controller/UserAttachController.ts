import { UserAttach } from '../entity/UserAttachEntity';
import { Request,Response } from 'express';
import { AppDataSource } from '../Config/dbConfig';


export default class UserAttachController{

    public static addUser = async (req: Request, res: Response): Promise<void> =>{
        try{
            const UserAttachRepo =AppDataSource.getRepository(UserAttach);
            const newUserAttach =UserAttachRepo.create(req.body);
            await UserAttachRepo.save(newUserAttach);
            res.status(201).json(newUserAttach);
        }catch (error){
            res.status(500).json({message :"Internal Server Error"})
        }
    };

    public static getUserAttach = async (req: Request, res: Response): Promise<void> => {
        try{
            const UserAttachRepo = AppDataSource.getRepository(UserAttach);
            const UserAttach_ = await UserAttachRepo.find();
            res.status(200).json(UserAttach_)
        }catch (error){
            res.status(500).json({message: "Internal Server Error"})
        }
    };
}