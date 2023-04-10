import React, { useState } from 'react'
import { Button, Checkbox, Form, Input, InputNumber, Select, Upload, } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { IProduct } from '../../interface/product';
import {useNavigate} from "react-router-dom"
// import "bootstrap/dist/css/bootstrap.min.css"

// import "toaStr/build/toastr.min.css"




interface IProps {
  onAdd: (body: IProduct) => void
}
const AddProduct = (props: IProps) => {
  const navigate = useNavigate();
  const onFinish = (body: any) => {
    props.onAdd(body);
    navigate("/admin/product") 
 };
  
 
  return (
    <div>
      
       <Form
     
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    // onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Name"
      name="name"
      
    >
    <Input placeholder='Nhập tên sản phẩm'/>
   
    </Form.Item>
    
    <Form.Item
      label="Price"
      name="price"
      // rules={[{ required: true, message: 'Price không được bỏ trống!' }]}
    >
    <InputNumber placeholder='Giá' />
    </Form.Item>

 

    <Form.Item
      label="Desc"
      name="desc"
      // rules={[{ required: true, message: 'Desc không được bỏ trống!' }]}
    >
    <Input.TextArea placeholder='Mô tả' />
    </Form.Item>

    
    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Add Product
      </Button>
    </Form.Item>
  </Form>

    </div>
    
  )
}
 


export default AddProduct