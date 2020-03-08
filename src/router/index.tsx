/**
 * @author guoqing.dong
 * @description 路由
 * 
 */

import * as React  from 'react';
import { Route, Switch, Redirect} from 'react-router-dom'
import cookie from 'js-cookie'
import routes from './conf'
import BaseConfig from '../conf'
const { ROOTPATH } = BaseConfig;


const { Fragment } = React
const fmtRoutes = (Routes:Array<any>) => {
    return (<Fragment>
            <Switch>
                {Routes.map((route) => {
                    const {component,...rest} = route
                    // console.log(route)
                    // if(!cookie.get('username')){
                    //     return <Redirect to={{}} />
                    // }
                    return <Route {...rest} render={props => {
                        // console.log(props)
                        if(route.auth && !cookie.get('username')){
                            return <Redirect to={{
                                pathname: "/login",
                                state: { from: props.location }
                              }} />
                        }
                        if(route.path == ROOTPATH) {
                            return <Redirect to={{
                                pathname: ROOTPATH + "/app/home",
                                state: { from: props.location }
                              }} />
                        }
                        return <Fragment><route.component {...props}  tt='1' routes ={route.routes ? fmtRoutes(route.routes) : null } /></Fragment>
                    }} />
                })}
            </Switch>
        </Fragment>)
}

export default () => fmtRoutes(routes)