import express from "express"
import { getAllUsers } from "../controller/users.js"

const router = express.Router()
// root /users
router.get("/allUsers", getAllUsers) 


export default router

