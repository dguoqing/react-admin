import React, {useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import cookie from 'js-cookie'
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { get, post } from '../../net'
import './login.less'

interface ResType {
    flg: boolean
}


const Login: React.FC = (props: any) => {
    const [loginForm] = Form.useForm()
    const [bgPath] = useState('http://image.wufazhuce.com/FjTRzdyGNmnLUiyTJBlbj7UnWnDS')
    const login = (e: React.FormEvent): void => {
        e.preventDefault();
        console.log(props)
        const {location} = props
        let toPath:string = location?.state?.from?.pathname || '/app'
        loginForm.validateFields().then(async (values: any) => {
            console.log(values)
            const result: any = await post({ url: '/login', toast: true }, values)
                if (result.flg) {
                    cookie.set('username', result.username)
                    setTimeout(() => {
                        props.history.push(toPath)
                    }, 500)
                }
        }).catch((err: any) => {
            console.error(err)
        })
    };

    return <div className='login' style={{backgroundImage:`url(${bgPath})`}}>
        <Form
            name="normal_login"
            className="login-form login-cont"
            form={loginForm}
        >
            <Form.Item
                name='username'
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Username"
                />
            </Form.Item>
            <Form.Item
                name='password'
                rules={[{ required: true, message: 'Please input your Password!' }]}>

                <Input
                    prefix={<LockOutlined  className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                />
            </Form.Item>

            <Form.Item>
                <Form.Item name="remember" className='fl' valuePropName="checked" noStyle>
                    <Checkbox>记住密码</Checkbox>
                </Form.Item>
                <Link className="login-form-forgot fr" to="">忘记密码？</Link>

            </Form.Item>
            <Form.Item>
                <Button type="primary" onClick={login} block className="login-form-button">登录</Button>
                <Link to="/register">马上去注册！</Link>
            </Form.Item>
        </Form>
    </div>
}
export default Login;