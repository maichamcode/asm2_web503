

import Joi from "joi";

const productValidate = Joi.object({
    name: Joi.string().required().messages({
        "string.empty": "Khong duoc de trong",
        "any.required": "Name bat buoc"
    }),
    price: Joi.number().required().messages({
        "string.empty": "Khong dc de trong",
        "any.required": "Price bat buoc"
    }),
    // image: Joi.string().required().messages({
    //     "string.empty": "Khong dc de trong",
    //     "any.required": "Image bat buoc"
    // }),
    desc: Joi.string().required().messages({
        "string.empty": "Khong dc de trong",
        "any.required": "Desc bat buoc"
    }),
    // categoryId: Joi.string().required()
})

export default productValidate