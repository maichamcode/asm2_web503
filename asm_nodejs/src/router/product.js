

import express from "express"
import { create, getAll, getOne, remove, update } from "../controller/product";
import checkPermission from "../middleware/checkPermission";

const router = express.Router();

// router.post("/product/add", checkPermission, create)
router.get("/product", getAll)
router.get("/product/:id", getOne)
// router.delete("/product/:id", checkPermission, remove)
// router.put("/product/:id", checkPermission, update)

//test
router.post("/product/add", create)
router.delete("/product/:id", remove)
router.put("/product/:id", update)

export default router