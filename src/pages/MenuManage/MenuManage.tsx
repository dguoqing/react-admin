import React, { useState, useCallback, useEffect } from 'react';
import SearchForm from '../../components/SearchForm/SearchForm'
import Table from '../../components/Table/Table'
let data:any[] = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
    },
    {
        key: '4',
        name: 'Disabled User',
        age: 99,
        address: 'Sidney No. 1 Lake Park',
    },
];
const inputList:any[] = [
    {
        label:'身份证号',
        require:true,
        key:'idcord'
    },
    {
        label:'手机号',
        require:true,
        key:'phone'
    },
    {
        label:'微信号',
        require:true,
        key:'weChatId'
    },
    {
        label:'家庭住址',
        require:true,
        key:'homeAdress'
    },
]
let _data:any[] = []
const MenuManage: React.FC = () => {
    const [dataSource, setDataSource] = useState(data)
    const search = useCallback((values: any) => {
        console.log(values)
        requestTable(values)
    }, [])
    const d= dataSource
    const requestTable = (params: object) => {
        _data.push({
            key: _data.length + 2 + '',
            name: 'Disabled User' + _data.length,
            age: 99,
            address: 'Sidney No. 1 Lake Park',
        })
        const _d:any[] = [..._data,{
            key: _data.length + 2 + '',
            name: 'Disabled User' + _data.length,
            age: 99,
            address: 'Sidney No. 1 Lake Park',
        }]
        // console.log(_data,dataSource)
        setDataSource(_d)
    }
    useEffect(() => {
        return () => { }
    }, [dataSource])
    return <>
        <SearchForm search={search} inputList={inputList}/>
        <Table dataSource={d} />
    </>
}
export default MenuManage