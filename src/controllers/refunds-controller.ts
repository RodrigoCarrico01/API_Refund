import {Request, Response} from "express"
import {z} from "zod"
import {prisma} from "@/database/prisma"
import { AppError } from "@/utils/AppError"
import { Category } from "@prisma/client"

class RefundsController {
  async create(request: Request, response: Response){
    const bodySchema = z.object({
      name: z.string().trim().min(1, {message: "Name is required!"}),
      category: z.enum([Category.food, Category.others, Category.services, Category.transport, Category.accommodation]),
      amount: z.number().positive({message: "Value must be positive!"}),
      filename: z.string().min(20),
    })

    const {name, category, amount, filename} = bodySchema.parse(request.body)

    if(!request.user?.id){
      throw new AppError("Unauthorized", 401)
    }

    const refund = await prisma.refunds.create({
      data: {
        name,
        category,
        amount,
        filename,
        userId: request.user.id
      }
    })

    response.status(201).json(refund)
  }
}

export {RefundsController}