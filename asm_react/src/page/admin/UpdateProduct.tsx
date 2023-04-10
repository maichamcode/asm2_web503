import { useEffect, useState } from 'react'
import { IProduct } from '../../interface/product'
// import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { Button, Form, Input, InputNumber } from 'antd';




interface IProp {
  products: IProduct[],
  onUpdate:(body:IProduct)=>void
}


const UpdateProduct = (props:IProp) => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<IProduct>();
  //
  useEffect(()=>{
    const currentProduct = props.products.find((body:IProduct)=>body._id == id)
    setProduct(currentProduct)
  },[props])
  //
  useEffect(()=>{
    // console.log("current",product);
    
    setFields()
  },[product])
  //
  const [form] = Form.useForm();
  //
  const setFields = () => {
    form.setFieldsValue({ 
       id: product?._id,
       name: product?.name,
       price:product?.price,
       image:product?.image,
       desc: product?.desc,
    })
  }
  //
  const onFinish = (values: any) => {
    console.log(values);
    
    props.onUpdate(values);
    navigate("/admin/product")
 
    
 }
 
  return (
   
    <div>
         
       <Form
       form={form}
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    autoComplete="off"
  >

<Form.Item
    label=""
    name="id"
    style={{ display: 'none' }} // ẩn input này đi
    rules={[{ required: true, message: 'Please input your username!' }]}
>
    <Input />
</Form.Item>

    <Form.Item
      label="Name"
      name="name"
      rules={[{ required: true, message: 'Name không được bỏ tr!' }]}
    >
    <Input placeholder='Nhập tên sản phẩm'/>
    </Form.Item>
    
    <Form.Item
      label="Price"
      name="price"
      rules={[{ required: true, message: 'Price không được bỏ trống!' }]}
    >
    <InputNumber placeholder='Giá' />
    </Form.Item>

   
    <Form.Item
      label="Desc"
      name="desc"
      rules={[{ required: true, message: 'Desc không được bỏ trống!' }]}
    >
    <Input.TextArea placeholder='Mô tả' />
    </Form.Item>

  
    

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Update Product
      </Button>
    </Form.Item>
  </Form>
    </div>
   
  )
}

export default UpdateProduct