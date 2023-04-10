

import express from "express"
import { create, getOne, } from "../controller/category";
import checkPermission from "../middleware/checkPermission";

const router = express.Router();

router.get("/category/:id", getOne);
router.post("/category/add", checkPermission, create)
export default router