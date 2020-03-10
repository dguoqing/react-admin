
import { Link, useHistory } from 'react-router-dom'
import * as React from 'react'
import { useState, useEffect, } from 'react'
import { Layout,Badge } from 'antd'
import { UserOutlined, MenuFoldOutlined, MenuUnfoldOutlined,BellOutlined} from '@ant-design/icons'
import cookie from 'js-cookie';
import { get } from '../../net';
import { useSelector, } from 'react-redux';
import HeadBadgeTip from '../HeadBadgeTip/HeadBadgeTip'
import './header.less'

const { Header } = Layout

interface Flg {
    flg: boolean
}
interface IHeadProps {
    toggle: () => void,
    collapsed: boolean,
}

const Head: React.FC<IHeadProps> = (props) => {
    const {count } = useSelector((state:any):any => state.test)
    const [state, setState] = useState(false)
    const [badge,setBadge] = useState(false)
    const history = useHistory()
    const logOut = async (e: any) => {
        e.preventDefault()
        const { flg }: any = await get({ url: '/logout', toast: true })
        if (flg) {
            cookie.remove('username')
            setState(!state)
            history.push('/login')
        }

    }
    const controlHeadBadge = () => {
        setBadge(!badge)
    }
  

    return <Header>
        <header className='clearfix'>
            <div className='header-left fl'>
                {props.collapsed ? <MenuUnfoldOutlined onClick={props.toggle} className='fl icon halder-trigger' /> : <MenuFoldOutlined onClick={props.toggle} className='fl icon halder-trigger' />}
                {/* <ul className='header-nav fr'>
                    <li>
                        <Link to="/app/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/login">login</Link>
                    </li>
                    <li>
                        <Link to="/app/user">user</Link>
                    </li>
                    <li>
                        <Link to="/app/test">Test</Link>
                    </li>
                    <li>
                        <Link to="/notfound">NotFound</Link>
                    </li>
                    <li>
                        <Link to="/111">NotFoundPage</Link>
                    </li>
                </ul> */}
            </div>
            <ul className='header-right fr'>
                <li className='header-badge'><Badge count={count} ><BellOutlined  onClick={controlHeadBadge} /> </Badge>
                    {badge && <HeadBadgeTip />}
                </li>
                <li className='header-user'>
                    <a href=""><UserOutlined className='user-touxing' />{cookie.get('username')}</a>
                    <ul className='header-user-hidden'>
                        <li>
                            <Link to="/user">个人中心</Link>
                        </li>
                        <li>
                            <a onClick={logOut} href=":;">退出</a>
                        </li>
                    </ul>
                </li>

            </ul>
        </header>

    </Header>

}

export default Head

