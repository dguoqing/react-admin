import * as React from 'react';
import { Menu } from 'antd';
import { Link } from "react-router-dom";
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    AppstoreOutlined,
} from '@ant-design/icons';
import './menu.less'
const { SubMenu, Item } = Menu

interface MenuObj {
    title: string,
    linkTo?: string,
    children?: MenuObj[],
    icon?: any,
}
const MenuList: MenuObj[] = [
    {
        title: '首页',
        linkTo: '/app/home',
        icon: 'AppstoreOutlined',
    },
    {
        title: '产品管理',
        linkTo: '',
        icon: <AppstoreOutlined />,
        children: [
            {
                title: '产品一',

            },
            {
                title: '产品二',

            },
            {
                title: '产品三',
                children: [
                    {
                        title: '产品三-1'
                    },
                    {
                        title: '产品三-2'
                    },
                    {
                        title: '产品三-3'
                    },
                ]
            },
        ]
    },
    {
        title: '系统管理'
    },
    {
        title: '用户管理'
    },
    {
        title: '菜单管理'
    },
]

const renderMenu = (menuList: MenuObj[]) => {
    return menuList.map((menu: MenuObj) => {
        return menu.children
            ?
            <SubMenu
                key={menu.title}
                title={<span>
                    {menu.icon && menu.icon}
                    <span>{menu.title}</span>
                </span>}
            >
                {
                    renderMenu(menu.children)
                }
            </SubMenu>
            :
            <Item key={menu.title}>
                <VideoCameraOutlined />
                <span>{menu.linkTo ? <Link to={menu.linkTo}>{menu.title}</Link> : menu.title}</span>
            </Item>
    })
}
const MenuComp = () => {
    return <Menu theme="dark" className='slider-menu' mode="inline" defaultSelectedKeys={['1']}>
        {
            renderMenu(MenuList)
        }
    </Menu>
}
export default MenuComp

