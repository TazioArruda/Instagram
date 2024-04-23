import mongoose from "mongoose";
import { IUser } from "../entities/Users";


const UserSchema = new mongoose.Schema<IUser>({
    nickname: {type:String, riquired:true, unique:true},
    email: {type:String, riquired:true, unique:true},
    password: {type:String, riquired:true}
})


export const UserModel = mongoose.model("Users", UserSchema)