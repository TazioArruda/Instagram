import { PostRepository } from "../repositories/PostRepository" 
import { IPost, IPostDTO } from "../entities/Post"
import mongoose from "mongoose"



export class PostService {
    postRepository: PostRepository
    constructor(repository: PostRepository){
        this.postRepository = repository  

    }

    async createPost({author, content}:IPostDTO): Promise<IPost>{
        return this.postRepository.createPost({author,content})
    }
}