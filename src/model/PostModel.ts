import mongoose from "mongoose";
import { IPost } from "../entities/Post";



const PostSchema = new mongoose.Schema<IPost>({
    author: {type:String, riquired:true, unique:true},
    content: {type:String, riquired:true, unique:true},
    like_users:[{type: String}],
    
},{timestamps: true}) // timestamps faz a mesma função de updateAdt e CreatedAT


export const PostModel = mongoose.model<IPost>("Post", PostSchema)