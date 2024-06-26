import { UserRepository } from "../repositories/UserRepository"

import { IUser } from "../entities/Users"
import {hash} from "bcrypt"



export class UserService {
    userRepositoy: UserRepository
    constructor(repository: UserRepository){
        this.userRepositoy = repository
    }
    async createUserService(data:IUser):Promise<IUser>{
       const isUser = await this.userRepositoy.findUserByNicknameOrEmail(data.nickname, data.email)
    
        if(isUser){
            throw new Error("User already exists")

        }



        const User = this.userRepositoy.createUser({
            ...data,
            password: await hash(data.password, 8)
        })

        return User
    
    }

        async findAllUsers(){
            return this.userRepositoy.findAllUsers()
        }

    }

