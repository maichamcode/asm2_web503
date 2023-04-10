
import React from 'react'
import {Outlet} from "react-router-dom"
import  { useState } from 'react';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import {Link} from "react-router-dom"

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Dashboard', '1'),
  getItem('ProductList', '2'),
  getItem('AddProduct', '3'),
  getItem('UpdateProduct', '4'),
 
];



const AdminLayout:React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
      token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout style={{ minHeight: '100vh' }}>
          <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                <Menu.Item>
                    <Link key="1" to={'/admin'}>Dashboard</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link key="2" to={'/admin/product'}>ProductList</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link key="3" to={'/admin/product/add'}>AddProduct</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link key="4" to={'/admin/product/:id/update'}>UpdateProduct</Link>
                </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header style={{ padding: 0, background: colorBgContainer }} />
            <Content style={{ margin: '0 16px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                
              </Breadcrumb>
              <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
                <Outlet/>
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
          </Layout>
        </Layout>
      );
}

export default AdminLayout