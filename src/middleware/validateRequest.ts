import {plainToInstance} from "class-transformer";
import {validate, ValidationError} from "class-validator";
import { NextFunction, Request, Response } from "express";

const extractErrorRecursively = (error: ValidationError, rawErrors: string[]) => {
    if(error.constraints){
        Object.values(error.constraints).forEach((constraint) => {
            rawErrors.push(constraint);
        });
    }
    if(error.children && error.children.length > 0){
        error.children.forEach((child) => {
            extractErrorRecursively(child, rawErrors);
        });
    }
}

const requestValidator = (requestType: any) => {
    return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        const converterObject : any = plainToInstance(requestType, req.body)
        const valid = await validate(converterObject);
        if (valid.length > 0) {
            const rawErrors: string[] = [];
            valid.forEach((validationError) => {
                extractErrorRecursively(validationError, rawErrors);
            });
            res.status(400).json({ 
                code: 400,
                errors: rawErrors 
            });
            return;
        }
        next();
    };
};

export default requestValidator;