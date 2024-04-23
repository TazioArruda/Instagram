
import mongoose from "mongoose"
import { IUser } from "../entities/Users"



export class UserRepository {
    userRepository: mongoose.Model<IUser>

    constructor(UserModel:mongoose.Model<IUser>){
        this.userRepository = UserModel
    }

    async createUser (userdata:IUser): Promise<IUser>{

        return this.userRepository.create(userdata)

    }

    async findUserByNicknameOrEmail(nickname: string, email: string){

        return this.userRepository.findOne({$or:[{nickname},{email}]})
        
}

    async findAllUsers(){
        return this.userRepository.find()
    }
}