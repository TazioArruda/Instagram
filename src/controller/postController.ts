import { PostModel } from "../model/PostModel"
import { PostRepository } from "../repositories/PostRepository"
import { PostService } from "../service/PostService"
import * as yup from "yup"




const repository = new PostRepository(PostModel)
const service = new PostService(repository)


export async function createPost(req:Request, res: Response) {

    const bodyValidator = yup.object({


        author: yup.string(),
        content: yup.string().min(10),

try {

     // schema 

     bodyValidator.validate(req.body)

      const newPost = await service.createPostService({
        
        author: body.author, 
        content:body.content})

     

    })


    // validation

      


    
} catch (error) {
    
}
    const{body} = req

   
    
}