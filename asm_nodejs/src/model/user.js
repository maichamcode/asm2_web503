

import mongoose from "mongoose";

const userModel = mongoose.Schema({
    name: String,
    email: {
        type: String,
        // khong co 2 email giong nhau
        unique: true,
        // khong the de trong truong email nay
        required: true
    },
    pass: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: "member"
    }
}, { timestamps: true, versionKey: false })

export default mongoose.model("User", userModel)