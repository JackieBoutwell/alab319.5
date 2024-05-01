import express from "express"
// import { getOneUser } from "../controller/users.js"
import { getAllUsers, getOneUser, addUser, updateUser, deleteUser } from "../controller/users.js"

const router = express.Router()
// root /users
router.get("/allUsers", getAllUsers) 
router.get("/:id", getOneUser) 
router.post("/addUser", addUser);
router.patch("/updateUser/:name", updateUser);
router.delete("/deleteUser/:name", deleteUser)

export default router

