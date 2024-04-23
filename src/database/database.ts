import mongoose from "mongoose";
import "dotenv/config" 
 export async function connectDatabase(){

    mongoose.connection.once("open", () => {
        console.log("Database is running")
    })
   
    await mongoose.connect(process.env.DATABASE_URL as string)
    
}






