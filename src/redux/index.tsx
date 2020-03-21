/**
 * @author guoqing.dong
 * @description create store
 * 
 */

 import { createStore,applyMiddleware } from 'redux'
 import { composeWithDevTools } from 'redux-devtools-extension'
 import {persistStore, persistReducer} from 'redux-persist';
 import storageSession from 'redux-persist/lib/storage/session'
 import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
 import thunk from 'redux-thunk'
 import logger from 'redux-logger'
 import rootReducer from './module'

 let  middle:Array<any> = [thunk];
 console.log(process.env.NODE_ENV)
 if(process.env.NODE_ENV === 'development'){
     middle.push(logger)
 }
 const storageConfig = {
    key: 'root', // 必须有的
    storage:storageSession, // 缓存机制
    // whitelist: ['tabPanes','age'], // reducer 里持久化的数据,除此外均为不持久化数据
    // stateReconciler: autoMergeLevel2, // 查看 'Merge Process' 部分的具体情况
}
const myPersistReducer = persistReducer(storageConfig, rootReducer)

export default (initState?:any):any => {
    let store:any = createStore(myPersistReducer,initState,composeWithDevTools(applyMiddleware(...middle)));
    let persistor = persistStore(store)
    return {
        store,
        persistor
    }
 }
//  export const persistor = persistStore(store())

//  export default store()