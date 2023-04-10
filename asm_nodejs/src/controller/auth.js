

import User from "../model/user";
import { signinSchema, signupSchema } from "../schema/auth";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

// sign up

const signUp = async (req, res) => {
    try {
        const body = req.body;
        const { error } = signupSchema.validate(body, { abortEarly: false })
        if (error) {
            const errors = error.details.map((item) => item.message);
            return res.json({
                message: errors
            })
        }
        //checkEmail
        const checkEmail = await User.findOne({ email: body.email });
        if (checkEmail) {
            return res.json({
                message: "Email da ton tai"
            })
        }
        //ma hoa pass
        const hashPass = await bcrypt.hash(body.pass, 10)

        const user = await User.create({
            name: body.name,
            email: body.email,
            pass: hashPass,
        });
        const accessToken = jwt.sign({ _id: user.id }, "maidaica", { expiresIn: "2d" })
        return res.json({
            message: "Dang ky thanh cong",
            accessToken,
            user
        })
    } catch (error) {
        return res.json({
            message: error
        })
    }
}

//sign in

const signIn = async (req, res) => {
    try {
        const { email, pass } = req.body;
        const { error } = signinSchema.validate(req.body, { abortEarly: false });
        if (error) {
            const errors = error.details.map(item => item.message);
            return res.json({
                message: errors
            })
        }
        //
        const user = await User.findOne({ email });
        console.log(user);
        if (!user) {
            return res.json({
                message: "Ban chua dki tai khoan"
            })
        }
        //
        const isMatch = await bcrypt.compare(pass, user.pass);
        if (!isMatch) {
            return res.json({
                message: "Mat khau khong dung",

            })
        }
        //
        const accessToken = jwt.sign({ _id: user._id }, "maidaica", { expiresIn: "2d" });

        return res.json({
            message: "Dang nhap thanh cong",
            accessToken,
            user
        })

    } catch (error) {
        return res.json({
            message: "loi api"
        })
    }
}

export { signIn, signUp }