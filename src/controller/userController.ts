import * as yup from "yup"
import { UserRepository } from "../repositories/UserRepository"
import { UserModel } from "../model/UserModel"
import { Request, Response } from "express"
import {UserService} from "../service/userService"

const reposity = new UserRepository(UserModel)
const service = new UserService(reposity)



export async function createUserController(req: Request, res: Response){

    try{
       

        const {body} = req
        // schema 
        const bodyValidator = yup.object({
            nickname:yup.string(),
            email:yup.string().email(),
            password:yup.string(),
        })
        // validation

        await bodyValidator.validate(body)
        
        const result = await service.createUserService(body)
        const STATUS_CREATED = 201
        return res.status(STATUS_CREATED).json({result})
       
    }catch(error: any){
        const BAD_REQUEST = 400
        return res.status(BAD_REQUEST).json({
            message: error.message
        })
    }

   
}

export async function findAllUsersController(req: Request, res: Response){
    try {

        const allUsers = await service.findAllUsers()

        res.status(200).send({users:allUsers})

        return service.findAllUsers()
        
    } catch (error:any) {

        res.status(400).send({message: error.message})
        
    }
}