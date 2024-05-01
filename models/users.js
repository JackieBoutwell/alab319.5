import mongoose from "mongoose"
import { setThePassword } from "whatwg-url"

const userSchema = new mongoose.Schema({
    name: string,
    email: {
    type: string,
        required: true
    },
    password: {
    type: string,
        required: true
    },
})

export default mongoose.model("Users", userSchema);
