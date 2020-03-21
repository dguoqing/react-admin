import * as React from 'react';
import { Menu } from 'antd';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import BaseConfig from '../../conf'
import { TabPanStateType, addPane, add, TabPaneType,MenuObj } from '../../redux/module/tabPanes'
const { ROOTPATH } = BaseConfig
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

interface IProps {
    menuClick: (item: MenuObj) => void
}
export const MenuList: MenuObj[] = [
    {
        title: '首页',
        linkTo: ROOTPATH + '/app/home',
        icon: 'AppstoreOutlined',
        key: '1'
    },
    {
        title: '产品管理',
        icon: <AppstoreOutlined />,
        linkTo: '/app/productOne',
        key: '2',
        children: [
            {
                title: '产品一',
                linkTo: '/app/productOne',
                key: '2-1',
            },
            {
                title: '产品二',
                linkTo: '/app/productTwo',
                key: '2-2',
            },
            {
                title: '产品三',
                linkTo: '',
                key: '2-3',
                children: [
                    {
                        title: '产品三-1',
                        linkTo: '/app/productThree',
                        key: '2-3-1',
                    },
                    {
                        title: '产品三-2',
                        linkTo: '/app/productThree/productThree2',
                        key: '2-3-2',
                    },
                    {
                        title: '产品三-3',
                        linkTo: '/app/productThree/productThree3',
                        key: '2-3-3',
                    },
                ]
            },
        ]
    },
    {
        title: '系统管理',
        linkTo: '/app/home',
        key: '3-1',
    },
    {
        title: '用户管理',
        linkTo: '/app/user',
        key: '4-1',
    },
    {
        title: '菜单管理',
        linkTo: '/app/menuManage',
        key: '5-1',
    },
]

const findItem = (data: MenuObj[], id: string) => {
    let result: any = null
    const range = (cityData: MenuObj[], id: string) => {
        if (!cityData || !cityData.length) return;
        // 定义一个数据栈
        let stack = [];

        let item: any = null;

        //先将第一层节点放入栈
        for (var i = 0, len = cityData.length; i < len; i++) {
            stack.push(cityData[i]);
        }

        while (stack.length) {
            // 将数据栈的第一个取出来
            item = stack.shift();
            // 如果符合就赋值给result
            if (item.key == id) {
                result = item
            }
            //如果该节点有子节点，继续添加进入栈底
            if (item.children && item.children.length) {
                stack = stack.concat(item.children);
            }
        }
        return result
    };
    return range(data, id)

}
const renderMenu = (menuList: MenuObj[]) => {

    return menuList.map((menu: MenuObj) => {
        return menu.children
            ?
            <SubMenu
                key={menu.key}
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
            <Item key={menu.key}>
                <Link to={menu.linkTo}>
                    <VideoCameraOutlined />
                    <span>{menu.title}</span>
                </Link>
            </Item>
    })
}


const MenuComp = (props: IProps) => {
    const { panes, activeKey }: TabPaneType = useSelector((state: TabPanStateType<TabPaneType>) => ({ ...state.tabPanes }))
     
    const dispatch = useDispatch()
    const onclick = ({ item, key, keyPath, domEvent }: any) => {
        console.log(typeof key,key,activeKey,typeof activeKey)
        if (panes.some((v: MenuObj) => v.key == key)) {
            addPane({ panes, activeKey: key })(dispatch)
        } else {
            addPane({ panes: [...panes, findItem(MenuList, key)], activeKey: key })(dispatch)
        }

    }
    console.log(panes)
    return <Menu
        theme="dark"
        className='slider-menu'
        mode="inline"
        defaultSelectedKeys={['1']}
        selectedKeys={[activeKey]}
        onClick={onclick}
    >
        {
            renderMenu(MenuList)
        }
    </Menu>
}
export default MenuComp

