
import { Student } from '../entity/StudentEntity';
import { AppDataSource } from './../Config/dbConfig';
import { Request, Response } from "express";

export default class StudentController {
    public static addStudent = async (req: Request, res: Response): Promise<void> => {
        try {
            const { group_id, instructor_id, rate_id, comment_id, update_id } = req.body
            const studentRepo = AppDataSource.getRepository(Student);
            const newStudent = studentRepo.create({ group_id, instructor_id, rate_id, comment_id, update_id });
            await studentRepo.save(newStudent);
            res.status(201).json({ newStudent, message: 'student Added Successfly' });
        } catch (error) {
            res.status(500).json({ message: "Internal Server Errors", error });
        }
    };

    public static getStudent = async (req: Request, res: Response): Promise<void> => {
        try {
            const studentRepo = AppDataSource.getRepository(Student);
            const student = await studentRepo.find();
            res.status(200).json(student);
        } catch (error) {
            res.status(500).json({ message: "Internal Server Error" });
        }
    };


    public static getOneStudent = async (req: Request, res: Response): Promise<void> => {
        try {
            const id = Number(req.params.id)
            const studentRepo = AppDataSource.getRepository(Student);
            const student = await studentRepo.findOneBy({ id: id })

            if (student) res.status(200).json({ student, message: 'success fetch' })
        } catch (error) {
            res.status(500).json({ message: "Internal Server Error" });
        }
    };

    public static deleteStudent = async (req: Request, res: Response): Promise<void> => {
        try {
            const id = req.params.id
            console.log(id);
            const studentRepo = AppDataSource.getRepository(Student);
            const student = await studentRepo.delete(id)
            res.status(200).json({ message: 'student Deleted Successfly' });
        } catch (error) {
            res.status(500).json({ message: "Internal Server Error" });
        }
    };

    public static updateCourse = async (req: Request, res: Response): Promise<void> => {
        try {
            const id = Number(req.params.id)
            const { group_id, instructor_id, rate_id, comment_id, update_id } = req.body
            const StudentRepo = AppDataSource.getRepository(Student);
            const student = await StudentRepo.findOne({ where: { id } })

            if (!student) {
                res.status(404).json({ message: 'student not found' })
                return
            }
            StudentRepo.merge(student, { group_id, instructor_id, rate_id, comment_id, update_id })  
            await StudentRepo.save(student)
            res.status(200).json({ student, message: 'student Updated Successfly' });
        } catch (error) {
            res.status(500).json({ message: "Internal Server Error" });
        }
    };
}