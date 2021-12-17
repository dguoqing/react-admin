/**
 * @author guoqing.dong
 * 
 */

import * as React from 'react'
import BaseConfig from '../conf'
import Lazy from './lazy'
const { ROOTPATH } = BaseConfig;


const Test = Lazy("Test")

const Home = Lazy('Home');
const App = Lazy('App')
const Login = Lazy('Login/index')
const User = Lazy('User')
const LoginLogs = Lazy('User/LoginLogs/LoginLogs')
const Notifications = Lazy('User/Notifications/Notifications')
const UserInfo = Lazy('User/UserInfo/UserInfo')
const NotFound = Lazy('NotFound/NotFound')

//test

const ProductOne = Lazy('Product/ProductOne');
const ProductTwo = Lazy('Product/ProductTwo');
const PruductThree = Lazy('Product/PruductThree/PruductThree');
const PruductThree1 = Lazy('Product/PruductThree/PruductThree1');
const PruductThree2 = Lazy('Product/PruductThree/PruductThree2');
const PruductThree3 = Lazy('Product/PruductThree/PruductThree3');
const MenuManage = Lazy('MenuManage/MenuManage');
const Responsive = Lazy('Responsive/Responsive');
const Magic = Lazy('Magic/Magic');


const routes = [
    {
        path: ROOTPATH + '/',
        component: App,
        exact: true,
        key: 'app1'
    },
    {
        path: ROOTPATH + '/app',
        component: App,
        key: 'app',
        routes: [
            {
                path: ROOTPATH + '/app/home',
                component: Home,
                key: 'Home',
                exact: true,

            },
            {
                path: ROOTPATH + '/app/test',
                component: Test,
                key: 'Test',
                exact: true,

            },
            {
                path: ROOTPATH + '/app/user',
                component: User,
                key: 'User',
                // exact: true,
                auth: true,
                routes: [
                    {
                        path: ROOTPATH + '/app/user',
                        component: UserInfo,
                        key: 'UserInfo',
                        exact: true,
                        auth: true,
                    },
                    {
                        path: ROOTPATH + '/app/user/loginlogs',
                        component: LoginLogs,
                        key: 'LoginLogs',
                        exact: true,
                        auth: true,
                    },
                    {
                        path: ROOTPATH + '/app/user/notification',
                        component: Notifications,
                        key: 'Notifications',
                        exact: true,
                        auth: true,
                    },
                ]
            },
            //test
            {
                path: ROOTPATH + '/app/productOne',
                component: ProductOne,
                key: 'ProductOne',
                exact: true,

            },
            {
                path: ROOTPATH + '/app/productTwo',
                component: ProductTwo,
                key: 'ProductTwo',
                exact: true,

            },
            {
                path: ROOTPATH + '/app/productThree',
                component: PruductThree,
                key: 'PruductThree',
                // exact: true,
                routes:[
                    {
                        path: ROOTPATH + '/app/productThree',
                        component: PruductThree1,
                        key: 'PruductThree1',
                        exact: true,

                    },
                    {
                        path: ROOTPATH + '/app/productThree/productThree2',
                        component: PruductThree2,
                        key: 'PruductThree2',
                        exact: true,

                    },
                    {
                        path: ROOTPATH + '/app/productThree/productThree3',
                        component: PruductThree3,
                        key: 'PruductThree3',
                        exact: true,

                    },
                ]

            },
            {
                path: ROOTPATH + '/app/menuManage',
                component: MenuManage,
                key: 'MenuManage',
                exact: true,

            },
            {
                path: ROOTPATH + '/app/responsive',
                component: Responsive,
                key: 'Responsive',
                exact: true,

            },
            {
                path: ROOTPATH + '/app/magic',
                component: Magic,
                key: 'Magic',
                exact: true,

            },
            
        ]
    },
    {
        path: ROOTPATH + '/login',
        component: Login,
        key: 'login'
    },
    // 全局接口失败跳转
    {
        path: '*',
        component: NotFound,
        key: 'notfound',

    }
]


// const routes = [
//     {
//         path: ROOTPATH,
//         component: App,
//         exact: true,
//         key: 'App',
//         // routes: [
//         //     {
//         //         path: ROOTPATH + '/home',
//         //         component: Home,
//         //         key: 'Home',
//         //         exact: true,

//         //     },
//         //     {
//         //         path: ROOTPATH + '/test',
//         //         component: Test,
//         //         key: 'Test',
//         //         exact: true,
//         //     },

//         //     {
//         //         path: ROOTPATH + 'user',
//         //         component: User,
//         //         key: 'User',
//         //         // exact: true,
//         //         auth: true,
//         //         routes: [
//         //             {
//         //                 path: ROOTPATH + 'user',
//         //                 component: UserInfo,
//         //                 key: 'UserInfo',
//         //                 exact: true,
//         //                 auth: true,
//         //             },
//         //             {
//         //                 path: ROOTPATH + 'user/loginlogs',
//         //                 component: LoginLogs,
//         //                 key: 'LoginLogs',
//         //                 exact: true,
//         //                 auth: true,
//         //             },
//         //             {
//         //                 path: ROOTPATH + 'user/notification',
//         //                 component: Notifications,
//         //                 key: 'Notifications',
//         //                 exact: true,
//         //                 auth: true,
//         //             },
//         //         ]
//         //     },
//         //     // {
//         //     //     path: '*',
//         //     //     component: NotFound,
//         //     //     key: 'notfound',

//         //     // }
//         // ]
//     },
//     {
//         path: '/login',
//         component: Login,
//         // exact: true,
//         key: 'Login'
//     },
//     //全局接口失败跳转
//     {
//         path: '*',
//         component: NotFound,
//         key: 'notfound',

//     }

// ]

export default routes