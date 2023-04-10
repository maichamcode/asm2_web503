import React from 'react';
import { Button, Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { IProduct } from '../../interface/product';
import {Link} from "react-router-dom"
interface DataType {
  key: string;
  _id?:number|string,
  name:string,
  price:string,
  desc:string,
  image:string,
}
interface IProp {
    products: IProduct[];
    onRemove: (id:number|string)=>void;
}



const ProductList = ({products,onRemove}:IProp) => {

    
    const columns: ColumnsType<DataType> = [
        // {
        //     title: '#',
        //     dataIndex: 'id',
        //     key: '_id',
        //     render:(_,id)=><a>{id._id}</a>
        //   },    
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
      },
      {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
      },
      {
        title: 'Image',
        dataIndex: 'image',
        key: 'image',
      },
      {
        title: 'Desc',
        dataIndex: 'desc',
        key: 'desc',
      },
      
      {
        title: 'Action',
        key: 'action',
        render: (_, record:any) => (
          <Space size="middle">
           
            <Button type='primary' danger onClick={()=>onRemove(record._id)}>Xoa</Button>
            <Button type='primary'  ><Link to={`/admin/product/${record._id}/update`}>Sua</Link></Button>
          </Space>
        ),
      },
    ];
    return (
        <div>
            <Table columns={columns} dataSource={products} pagination={false} />   
        </div>
    )
}

export default ProductList