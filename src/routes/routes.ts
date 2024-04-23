import {Router} from "express";
import { createUserController, findAllUsersController } from "../controller/userController";
import userRoutes from "./userRoutes";

const router = Router ()

router.use("/user", userRoutes)


export default router