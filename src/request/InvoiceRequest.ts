import { IsNotEmpty, IsNumber } from "class-validator";


export class addInvoiceRequest{

        @IsNumber()
        @IsNotEmpty()
        groupId!:number; 
        
                
        @IsNumber()
        @IsNotEmpty()
        instructorId!:number; 
        
        @IsNumber()
        @IsNotEmpty()
        topicId!:number; 
        
        @IsNumber()
        @IsNotEmpty()
        lecNum!:number; 
        
        @IsNumber()
        @IsNotEmpty()
        rate!:number; 
        
        @IsNumber()
        @IsNotEmpty()
        hoursNum!:number; 
        
        @IsNumber()
        @IsNotEmpty()
        totalCash!:number; 


}
