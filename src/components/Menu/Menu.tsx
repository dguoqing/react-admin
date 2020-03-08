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
    linkTo: string,
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
        icon: <AppstoreOutlined />,
        linkTo: '/app/productOne',
        children: [
            {
                title: '产品一',
                linkTo: '/app/productOne',

            },
            {
                title: '产品二',
                linkTo: '/app/productTwo',

            },
            {
                title: '产品三',
                linkTo: '',
                children: [
                    {
                        title: '产品三-1',
                        linkTo: '/app/productThree',
                    },
                    {
                        title: '产品三-2',
                        linkTo: '/app/productThree/productThree2',
                    },
                    {
                        title: '产品三-3',
                        linkTo: '/app/productThree/productThree3',
                    },
                ]
            },
        ]
    },
    {
        title: '系统管理',
        linkTo: '/app/home',
    },
    {
        title: '用户管理',
        linkTo: '/app/user',
    },
    {
        title: '菜单管理',
        linkTo: '/app/menuManage',
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
                <Link to={menu.linkTo}>
                    <VideoCameraOutlined />
                    <span>{menu.title}</span>
                </Link>
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

