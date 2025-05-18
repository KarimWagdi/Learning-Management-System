import { plainToInstance} from "class-transformer";
import {validate, ValidationError} from "class-validator";
import {NextFunction} from "express"

function extractErrorRecursively(error: ValidationError, rawErrors: string[]) {
    if(error.constraints){
        Object.values(error.constraints).forEach((constraint) => {
            rawErrors.push(constraint);
        });
    }
    if(error.children && error.children.length > 0){
        error.children.forEach((child) => {
            extractErrorRecursively(child, rawErrors);
        })
    }
}

const requestValidator = (requestType:any) => {
    return async (req: Request, res:any, next:NextFunction) => {
        const convertObject: any = plainToInstance(requestType, req.body);
        const valid = await validate(convertObject)
        if(valid.length > 0){
            const rawErrors: string[] = [];
            valid.forEach((validationError) => {
                extractErrorRecursively(validationError, rawErrors)
            });
            const data = {code: 400, data: rawErrors}
            res.status(400).json(data)
        }else{
            next();
        }
    }
}


