import Joi from "joi";

const signupSchema = Joi.object({
    name: Joi.string().required().messages({
        "string.empty": "Ten khong duoc de trong",
        "any.required": "Name bat buoc"
    }),
    email: Joi.string().email().required().messages({
        "string.empty": "Email khong duoc de trong",
        "any.required": "Email bat buoc",
        "string.email": "Email khong dung dinh dang"
    }),
    pass: Joi.string().required().min(6).messages({
        "string.empty": "Pass khong duoc de trong",
        "any.required": "Pass bat buoc",
        "string.min": "Mat khau phai it nhat {#limit} ky tu"
    }),
    confirmPass: Joi.string().required().valid(Joi.ref("pass")).messages({
        "string.empty": "confirmPass khong duoc de trong",
        "any.required": "confirmPass bat buoc",
        "any.only": "Mat khau khong khop"
    })
})
// signin
const signinSchema = Joi.object({

    email: Joi.string().email().required().messages({
        "string.empty": "Email khong duoc de trong",
        "any.required": "Email bat buoc",
        "string.email": "Email khong dung dinh dang"
    }),
    pass: Joi.string().required().min(6).messages({
        "string.empty": "Pass khong duoc de trong",
        "any.required": "Pass bat buoc",
        "string.min": "Mat khau phai it nhat {#limit} ky tu"
    })

})

export { signupSchema, signinSchema }