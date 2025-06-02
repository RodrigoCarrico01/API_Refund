import {Request, Response} from "express"
import {z} from "zod"
import {prisma} from "@/database/prisma"
import { UserRole } from "@prisma/client"
import { AppError } from "@/utils/AppError"
import { hash } from "bcrypt"

class UsersController{
  async create(request: Request, response: Response){

    const bodySchema = z.object({
      name: z.string().trim().min(2, {message: "Name is required!"}),
      email: z.string().trim().email({message: "Invalid e-mail"}).toLowerCase(),
      password: z.string().min(6, {message: "Password must have atleast 6 digits!"}),
      role: z.enum([UserRole.employee, UserRole.manager]).default(UserRole.employee)
    })

    const {name, email, password, role} = bodySchema.parse(request.body)

    const userWithSameEmail = await prisma.user.findFirst({
      where: { email }
    })

    if(userWithSameEmail){
      throw new AppError("This e-mail is already being used.")
    }

    const hashedPassword = await hash(password, 8)

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role,
      }
    })

    const {password:_, ...userWithoutPassword} = user
 
    response.status(201).json(userWithoutPassword)
  }
}

export {UsersController}