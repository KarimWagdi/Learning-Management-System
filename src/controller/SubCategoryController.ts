import { SubCategory } from "../entity/SubCategoryController";
import { Request, Response } from "express";
import { AppDataSource } from "../Config/dbConfig";

export default class SubCategoryController {
    // Create
    public static createSubCategory = async (req: Request, res: Response): Promise<void> => {
        try {
            const subCategoryRepo = AppDataSource.getRepository(SubCategory);
            const newSubCategory = subCategoryRepo.create(req.body);
            await subCategoryRepo.save(newSubCategory);
            res.status(201).json(newSubCategory);
        } catch (error){
            console.error(error); // Add this line to log the actual error
            res.status(500).json({message: "Internal Server Error", error: error instanceof Error ? error.message : 'Unknown error occurred'})
        }
    };

    // Read (all)
    public static getAllSubCategories = async (req: Request, res: Response): Promise<void> => {
        try {
            const subCategoryRepo = AppDataSource.getRepository(SubCategory);
            const subCategories = await subCategoryRepo.find();
            res.status(200).json(subCategories);
        } catch (error){
            console.error(error); // Add this line to log the actual error
            res.status(500).json({message: "Internal Server Error", error: error instanceof Error ? error.message : 'Unknown error occurred'})
        }
    };

    // Read (single)
    public static getSubCategoryById = async (req: Request, res: Response): Promise<void> => {
        try {
            const subCategoryRepo = AppDataSource.getRepository(SubCategory);
            const subCategory = await subCategoryRepo.findOneBy({ id: parseInt(req.params.id) });
            if (subCategory) {
                res.status(200).json(subCategory);
            } else {
                res.status(404).json({ message: "SubCategory not found" });
            }
        } catch (error){
            console.error(error); // Add this line to log the actual error
            res.status(500).json({message: "Internal Server Error", error: error instanceof Error ? error.message : 'Unknown error occurred'})
        }
    };

    // Update
    public static updateSubCategory = async (req: Request, res: Response): Promise<void> => {
        try {
            const subCategoryRepo = AppDataSource.getRepository(SubCategory);
            const subCategory = await subCategoryRepo.findOneBy({ id: parseInt(req.params.id) });
            if (subCategory) {
                subCategoryRepo.merge(subCategory, req.body);
                const result = await subCategoryRepo.save(subCategory);
                res.status(200).json(result);
            } else {
                res.status(404).json({ message: "SubCategory not found" });
            }
        } catch (error){
            console.error(error); // Add this line to log the actual error
            res.status(500).json({message: "Internal Server Error", error: error instanceof Error ? error.message : 'Unknown error occurred'})
        }
    };

    // Delete (soft delete)
    public static deleteSubCategory = async (req: Request, res: Response): Promise<void> => {
        try {
            const subCategoryRepo = AppDataSource.getRepository(SubCategory);
            const subCategory = await subCategoryRepo.findOneBy({ id: parseInt(req.params.id) });
            if (subCategory) {
                await subCategoryRepo.softRemove(subCategory);
                res.status(204).send();
            } else {
                res.status(404).json({ message: "SubCategory not found" });
            }
        } catch (error) {
            res.status(500).json({ message: "Internal Server Error" });
        }
    };
}