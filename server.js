import express from 'express'
import 'dotenv/config'
import mongoose from 'mongoose'
import router from "./routes/usersRoutes.js"

const app = express()

const PORT = process.env.PORT || 5050;

await mongoose.connect(process.env.MONGO_URI)

app.use ("/users", router)

app.get('/', (req, res) => {
    res.send('Hello! (from Server)')
})

app.listen(PORT, () => {
    console.log('Listening on port: ' + PORT)
})
