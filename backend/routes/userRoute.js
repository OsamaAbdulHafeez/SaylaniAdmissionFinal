import express  from "express";
import { deleteController,  getAllUsersController, getUserController, updateController } from "../controllers/userController.js";


//user API
const userRouter = express.Router()

//get user
userRouter.get("/:id", getUserController)
//get all users
userRouter.get("/", getAllUsersController)
//update user
userRouter.put("/:id", updateController)
// //delete user
userRouter.delete("/:id", deleteController)

export default userRouter