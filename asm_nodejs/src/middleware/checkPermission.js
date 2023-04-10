



import User from '../model/user';
import jwt from "jsonwebtoken"

const checkPermission = async (req, res, next) => {
    try {
        const permission = req.headers.authorization;
        if (!permission) {
            return res.json({
                messagem: "Ban chua dang nhap"
            })
        }
        //
        const token = permission.split(" ")[1];
        jwt.verify(token, "maidaica", async (error, payload) => {
            if (error) {
                if (error.name == 'TokenExpiredError') {
                    return res.json({
                        message: "Token het han"
                    })
                }
                if (error.name == 'JsonWebTokenError') {
                    return res.json({
                        message: "Token khong hop le"
                    })
                }
            }
            const user = await User.findById(payload._id);
            if (user.role !== "admin") {
                return res.json({
                    message: "Ban khong co quyen "
                })
            }
            next()
        });

    } catch (error) {
        return res.json({
            message: error
        })
    }
}

export default checkPermission
