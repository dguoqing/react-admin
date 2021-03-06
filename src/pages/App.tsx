import * as React from "react";
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Layout, Menu } from 'antd'
import { useState, useEffect, useCallback } from 'react'
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    AppstoreOutlined,
} from '@ant-design/icons';
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import HooksTest from './HooksTest'
import MenuComp from '../components/Menu/Menu'
import Tab from '../components/Tab/Tab'


import '../assets/style/app.less'

const { Content, Sider } = Layout
const { SubMenu } = Menu;

const App: React.FC = (props: any) => {
    const [collapsed, setCollapsed] = useState(false)
    const [menuItem, setMenuItem] = useState(null)
    const toggle = (): void => {
        setCollapsed(() => !collapsed)
    }
    const menuClick = (item: any) => {
        console.log(item)
        setMenuItem(item)
    }
    useEffect(() => {

    }, [collapsed])
    return (
        <div className='main' >
            <Layout style={{ height: "100%" }}>
                <Sider trigger={null} collapsible={true} collapsed={collapsed}>
                    <div className="logo" />
                    <MenuComp menuClick={menuClick} />
                </Sider>
                <Layout style={{ backgroundColor: '#eee' }}>
                    <Header collapsed={collapsed} toggle={toggle} />
                    <Tab />
                    <div >当前位置：</div>
                    {/* <Content style={{height:'2000px',backgroundColor:'#000'}}> */}
                        <div style={{ padding:'10px', textAlign: 'center', backgroundColor:'#ddd'}}>
                            {props.routes}
                        </div>
                    {/* </Content> */}
                    <Footer />
                </Layout>

            </Layout>
        </div>
    )
};

export default App