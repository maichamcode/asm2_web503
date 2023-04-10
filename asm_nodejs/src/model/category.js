

import mongoose from "mongoose";

const categoryModel = new mongoose.Schema({
    name: String,
    product: [{ type: mongoose.Types.ObjectId, ref: "Product" }]


}, { timestamps: true, versionKey: false })

export default mongoose.model("Category", categoryModel)