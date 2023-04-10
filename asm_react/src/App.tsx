import { useEffect, useState } from 'react'
import {Routes, Route} from "react-router-dom"
import AdminLayout from './page/layout/AdminLayout';
import Dashboard from './page/admin/Dashboard';
import ProductList from './page/admin/ProductList';
import AddProduct from './page/admin/AddProduct';
import UpdateProduct from './page/admin/UpdateProduct';
import { addProduct, deleteProduct, getAll, updateProduct } from './api/product';
import { IProduct } from './interface/product';
import Login from "./page/Login";
function App() {
  const [products,setProducts] = useState<IProduct[]>([]);
  useEffect(()=>{
    (async ()=>{
      const {data:{data}} = await getAll()     
      setProducts(data);      
  })();
  },[])
  //xoa
  const onHandleRemove =async (id:number|string)=>{
    try {
      await deleteProduct(id);
      const data = products.filter((item)=>item._id!==id)
      setProducts(data)
    } catch (error) {
      console.log(error);  
    }
    
  }
  //them
  const onHandleAdd = async(body:IProduct)=>{
    try {
      await addProduct(body);
      setProducts([...products,body])
    } catch (error) {
      console.log(error);
      
    }
  }
  //sua
  const onHandleUpdate = async(body:IProduct)=>{
    
      console.log(body.id);
      await updateProduct(body)
      setProducts(products.map((item) => item._id === body.id ? body : item))
  
  }

  return (
    <div className="App">


        <Routes>
          {/* Home */}
          <Route path='/login' element={<Login />} />

          {/* admin */}
          <Route path='/admin' element={<AdminLayout/>}>
            <Route index element={<Dashboard/>} />
            <Route path='product' >
              <Route index element={<ProductList products={products} onRemove={onHandleRemove} />} />
              <Route path='add' element={<AddProduct onAdd={onHandleAdd}/>}/>
              <Route path=':id/update' element={<UpdateProduct products={products} onUpdate={onHandleUpdate} />}/>
            </Route>
          </Route>
        </Routes>
    </div>
  )
}

export default App
