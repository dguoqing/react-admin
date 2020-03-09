/**
 * @author guoqing.dong
 * @description merge all reducers
 */

import { combineReducers } from 'redux'

import test from './test'
import tabPanes from './tabPanes'



export default combineReducers({
    test,
    tabPanes,
})
