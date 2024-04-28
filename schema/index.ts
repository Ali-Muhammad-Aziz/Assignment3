import { z } from "zod"

export const EmployeeSchema = z.object({ 

    FirstName: z.string().min(2,{
        message:"first name should be atleast 2 characters"} 
    ),
    LastName: z.string().min(2,{
        message:"Last name should be atleast 2 characters"} 
    ),
    email: z.string().email({
        message:"insert a valid email"} 
    ),
    phoneNumber: z.string().min(11,{
        message:"phone number should be 11 number"} 
    )
})