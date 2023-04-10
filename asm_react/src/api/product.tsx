

import { IProduct } from "../interface/product";
import instance from "./instance";

export const getAll = ()=>{
    return instance.get("/product")
}

export const deleteProduct = (id:number|string)=>{
    return instance.delete(`/product/${id}`)
}

export const addProduct = (body:IProduct)=>{
    return instance.post("/product/add",body)
}

export const updateProduct = (body:IProduct)=>{
    return instance.put(`/product/${body.id}`,body)
}

