"use server"
import { EmployeeSchema } from "@/schema"
import { z } from "zod"
import { db } from "@/lib/db"

export const CreateEmployees = async (values: z.infer<typeof EmployeeSchema>) => {
    const validatedvalues= EmployeeSchema.safeParse(values)

    if (!validatedvalues.success){
        return{error: "values are invalid"}
    }
    
    const employee = await db.employee.create(

        {
            
            data:{
            firstName: validatedvalues.data.FirstName,
            lastName: validatedvalues.data.LastName,
            email: validatedvalues.data.email,
            phonenumber:validatedvalues.data.phoneNumber
            }
        }
    )

    console.log(employee);

   
}