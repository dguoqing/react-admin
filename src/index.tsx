import * as ReactDOM from 'react-dom';
import * as React from 'react';
// import { AppContainer } from 'react-hot-loader'
import { hot } from 'react-hot-loader/root'
import {
    HashRouter,
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import createStore from './redux'
import App from './pages/App'
import Router from './router'

import moment from 'moment'
import 'moment/locale/zh-cn';

import './assets/style/base.css'
import './assets/style/index.less'
import 'antd/dist/antd.css'

const {store,persistor}  = createStore()

hot(Router)

const render = (Router: any) => {
    ReactDOM.render(
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <HashRouter>
                    <Router />
                </HashRouter>
            </PersistGate>
        </Provider>
        ,
        document.getElementById('root') as HTMLElement)
}

render(Router)










/**
 *
 * @description 老版本的热更新
 *
const render = App => {

    ReactDOM.render(
        <AppContainer>
            <App />
        </AppContainer>,
        document.getElementById('root'))
}

render(App)

if (module.hot) {
    module.hot.accept('./pages/App.js', () => {
        console.log('热更新了....')
        const NextRootContainer = require('./pages/App').default;
        render(NextRootContainer)
    })
}
*/


