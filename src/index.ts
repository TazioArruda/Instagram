import "dotenv/config"

interface User {}

import express from "express"
import { createUserController } from "./controller/userController"
import { connectDatabase } from "./database/database"
import router from "./routes/routes"

connectDatabase()
const app = express()
const port = 3050

app.use(express.json())

app.use("/", router)

app.listen(3050, () => {
    console.log(`Server is running: http://localhost:${port}/`)
})

