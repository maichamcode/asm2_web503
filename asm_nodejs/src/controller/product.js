

import Category from "../model/category";
import Product from "../model/product";
import productValidate from "../schema/product";


//them
export const create = async (req, res) => {
    try {
        const body = req.body;
        const { error } = productValidate.validate(body)
        if (error) {
            const errors = error.details.map((item) => item.message);
            return res.json({
                message: errors
            })
        }
        //
        const data = await Product.create(body);
        await Category.findByIdAndUpdate(data.categoryId, {
            $addToSet: {
                product: data._id
            }
        })
        res.json({
            message: "Them thanh cong",
            data
        })
    } catch (error) {
        return res.json({
            message: "Them that bai",
            error
        })
    }
}
// getAll 

export const getAll = async (req, res) => {
    const { _sort = "price", _order = "asc", _limit = 4, _page = 1 } = req.query;
    const option = {
        page: _page,
        limit: _limit,
        sort: {
            [_sort]: _order === "desc" ? 1 : -1,
        },
    };
    try {
        const { docs, totalDocs, totalPages } = await Product.paginate({}, option);
        if (docs.length === 0) {
            return res.json({
                message: "Khong co san pham nao"
            })
        }
        return res.json({ data: docs, totalDocs, totalPages })


    } catch (error) {
        return res.json({
            message: "Khong co danh sach nao",
            error
        })
    }
}
// getOne

export const getOne = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Product.findById(id);
        return res.json({
            message: "Tim thay 1 san pham",
            data
        })
    } catch (error) {
        return res.json({
            message: "Khong thay 1 san pham nao",
            error
        })
    }
}

//xoa

export const remove = async (req, res) => {
    try {
        const id = req.params.id;
        await Product.findByIdAndDelete(id)
        return res.json({
            message: "Xoa thanh cong"
        })
    } catch (error) {
        return res.json({
            message: "Xoa that bai",
            error
        })
    }
}

// update
export const update = async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const data = await Product.findByIdAndUpdate(id, body, { new: true });
        return res.json({
            message: "Sua thanh cong",
            data
        })
    } catch (error) {
        return res.json({
            message: "Sua that bai",
            error
        })
    }
}