import * as React from "react";
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Layout, Menu ,Button} from 'antd'
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
import { FullScreen, useFullScreenHandle } from "react-full-screen";


import '../assets/style/app.less'

const { Content, Sider } = Layout
const { SubMenu } = Menu;

const App: React.FC = (props: any) => {
    const [collapsed, setCollapsed] = useState(false)
    const [isFull, setFull] = useState(false)
    const [menuItem, setMenuItem] = useState(null)
    const handle = useFullScreenHandle();
    const toggle = (): void => {
        setCollapsed(() => !collapsed)
    }
    const onChage = (state:boolean,handle:any) => {
        console.log(state,handle,'>>>>>>>>>>>>>>>>>>>')
        setFull(state)
    }
    const onClick = () => {
        if(isFull){
            handle.exit()
            setFull(false)
        }else{
            handle.enter()
            setFull(true)


        }
        console.log('>>>>>>>>>>>>handlehandle>>>>>>>>>>',handle)
    }
    const menuClick = (item: any) => {
        console.log(item)
        setMenuItem(item)
    }
    useEffect(() => {
        window.addEventListener('keydown', function (e) {
            e = e || window.event;
            if ((e?.keyCode === 122 || e.key === 'F11') ) {
                e.preventDefault();
                onClick()
            }
        });
        return () => {
            
        }
    }, [])
    useEffect(() => {

    }, [collapsed])
    return (
        <>
       
        <div className='main' >
        <FullScreen handle={handle} onChange={onChage} >
            <Layout style={{ height: "100%" }}>
                <Sider trigger={null} collapsible={true} collapsed={collapsed}>
                    <div className="logo" />
                    <MenuComp menuClick={menuClick} />
                </Sider>
                <Layout style={{ backgroundColor: '#eee' }}>
                    <Header collapsed={collapsed} toggle={toggle} />
                    <Tab />
                    <div >当前位置：</div>
        <Button onClick={onClick}>全屏</Button>

                    {/* <Content style={{height:'2000px',backgroundColor:'#000'}}> */}
                        <div style={{ padding:'10px', textAlign: 'center', backgroundColor:'#ddd'}}>
                            {props.routes}
                        </div>
                    {/* </Content> */}
                    <Footer />
                </Layout>

            </Layout>
        </FullScreen>

        </div>
        </>
        
    )
};

export default App