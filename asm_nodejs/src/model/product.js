

import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2"
const productModel = new mongoose.Schema({
    name: String,
    price: Number,
    // image: String,
    desc: String,
    // categoryId: {
    //     type: mongoose.Types.ObjectId,
    //     ref: "Category"
    // }

}, { timestamps: true, versionKey: false })
productModel.plugin(mongoosePaginate);

export default mongoose.model("Product", productModel)