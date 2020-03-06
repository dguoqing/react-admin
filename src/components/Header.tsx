
import { Link, useHistory } from 'react-router-dom'
import * as React from 'react'
import { useState, useEffect } from 'react'
import { Layout } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import cookie from 'js-cookie';
import { get } from '../net';

const { Header } = Layout

interface Flg {
    flg: boolean
}

const Head: React.FC = (props:any) => {
    console.log(props)
    console.log(cookie.get('username'))
    const [state, setState] = useState(false)
    const history = useHistory()
    const logOut = async (e:any) => {
        e.preventDefault()
        const { flg }: any = await get({ url: '/logout', toast: true })
        if (flg) {
            cookie.remove('username')
            setState(!state)
            history.push('/login')
        }

    }
    // useEffect(() => {


    // })

    return <Header>
        <header className='clearfix'>
            <div className='header-left fl'>
                <ul className='header-nav'>
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
                        <Link to="/test">Test</Link>
                    </li>
                    <li>
                        <Link to="/notfound">NotFound</Link>
                    </li>
                    <li>
                        <Link to="/111">NotFoundPage</Link>
                    </li>
                </ul>
            </div>
            <div className='header-right fr'>
                {
                    cookie.get('username') ?
                        <div className='header-user'>
                            <a href=""><UserOutlined className='user-touxing' />{cookie.get('username')}</a>
                            <ul className='header-user-hidden'>
                                <li>
                                    <Link to="/user">个人中心</Link>
                                </li>
                                <li>
                                    <a onClick={logOut} href=":;">退出</a>
                                </li>
                            </ul>
                        </div>
                        :
                        <div>
                            <Link className='btn-login' to="/login">登录</Link>
                            <Link className='btn-regisiter' to="/register">注册</Link>
                        </div>
                }
            </div>
        </header>

    </Header>

}

export default Head

