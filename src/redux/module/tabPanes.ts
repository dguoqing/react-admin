/**
import { type } from './test';
 * 
 * @author guoqing.dong
 * 
 * @description Tab标签显示
 */
import { Dispatch } from 'react'
import BaseConfig from '../../conf'
const { ROOTPATH } = BaseConfig

//增加pane常量
const PANE_ADD: string = 'PANE_ADD';
const PANE_DEL: string = 'PANE_DEL'

//定义接口

export interface MenuObj {
    title: string,
    linkTo: string,
    children?: MenuObj[],
    icon?: any,
    key: number
}
export interface AddAction {
    type: typeof PANE_ADD,
    payload: TabPaneType
}
export interface DelAction {
    type: typeof PANE_DEL,
    payload: TabPaneType
}

//定义action类型
export type ActionType = AddAction | DelAction;

//定义Props&&State

export interface IPropsType extends TabPaneType {
    delPane: (data: TabPaneType) => void,
    addPane?: (data: TabPaneType) => void,
}

export interface TabPaneType {
    panes: MenuObj[],
    activeKey: string,
}
export interface TabPanStateType<T> {
    tabPanes: T
}


const initState = {
    panes: [{
        title: '首页',
        linkTo: ROOTPATH + '/app/home',
        icon: 'AppstoreOutlined',
        key: 1
    },],
    activeKey: '',
}

//创建action

export const add = (payload: TabPaneType): AddAction => {
    return {
        type: PANE_ADD,
        payload,
    }
}

export const del = (payload: TabPaneType): DelAction => {
    return {
        type: PANE_DEL,
        payload
    }
}

//dispatch
export const delPane = (data: TabPaneType): Function => (dispatch: Dispatch<ActionType>): void => {
    console.log(dispatch)
    // setTimeout(() => {
        dispatch(del(data))
    // }, 500)
}

export const addPane = (data: TabPaneType): Function => (dispatch: Dispatch<ActionType>): void => {
    console.log(dispatch)
    // setTimeout(() => {
        dispatch(add(data))
    // }, 500)
}


//reducer

export default (state = initState, action: ActionType): object => {
    const { payload, type } = action;
    switch (type) {
        case PANE_ADD:
            return Object.assign({}, state, {
                panes: payload.panes,
                activeKey: payload.activeKey
            })
        case PANE_DEL:
            return Object.assign({}, state, {
                panes: payload.panes,
                activeKey: payload.activeKey
            })
        default:
            return state
    }
}
