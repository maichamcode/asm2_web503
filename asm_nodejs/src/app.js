

import mongoose from "mongoose";
import express from "express"
import productRouter from "./router/product"
import authRouter from "./router/auth"
import categoryRouter from "./router/category"
import cors from "cors"
const app = express();
app.use(express.json())
app.use(cors())
app.use("/api", productRouter)
app.use("/api", authRouter)
app.use("/api", categoryRouter)
mongoose.connect("mongodb://127.0.0.1:27017/asm2")
export const viteNodeApp = app;