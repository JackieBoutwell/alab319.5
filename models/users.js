import mongoose from "mongoose"
import { setThePassword } from "whatwg-url"

const userSchema = new mongoose.Schema({
    name: String,
    email: {
    type: String,
        unique: true
    },
    password: {
    type: String,
        required: true
    },
})

export default mongoose.model("users", userSchema);
