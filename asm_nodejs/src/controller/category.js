

import Joi from "joi";
import Category from "../model/category";
import Product from "../model/product";

const categorySchema = Joi.object({
    name: Joi.string().required()
})
export const getOne = async (req, res) => {
    try {
        const id = req.params.id;
        const category = await Category.findById(id).populate("product");
        if (!category) {
            return res.json({
                message: "Khong co danh muc nao"
            })
        }
        return res.json(category)
    } catch (error) {
        return res.json({
            message: "loi ",
            error
        })
    }
}
export const create = async (req, res) => {
    try {
        const body = req.body;
        const { error } = categorySchema.validate(body)
        if (error) {
            const errors = error.details.map((item) => item.message);
            return res.json({
                message: errors
            })
        }
        //
        const data = await Category.create(body);
        res.json({
            message: "Them danh muc thanh cong",
            data
        })
    } catch (error) {
        return res.json({
            message: "Them danh muc that bai",
            error
        })
    }
}