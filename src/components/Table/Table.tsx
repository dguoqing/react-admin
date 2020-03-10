import React, { useState, useEffect } from 'react';
import { Table, Card } from 'antd';
import './table.less'

interface ITableProps {
    dataSource: any[]
}
const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        render: (text: string) => <a>{text}</a>,
    },
    {
        title: 'Age',
        dataIndex: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
    },
];

const rowSelection = {
    onChange: (selectedRowKeys: any, selectedRows: any) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record: any) => ({
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
        name: record.name,
    }),
};

const CpTable: React.FC<ITableProps> = ({ dataSource }) => {
    const [selectionType, setSelectionType] = useState('checkbox');
    return <Card className='cp-table'>
        <Table
            rowSelection={{
                // type: selectionType,
                ...rowSelection,
            }}
            columns={columns}
            dataSource={dataSource}
            bordered
            pagination={{
                current: 3,
                pageSize: 10,
                pageSizeOptions: ['10', '20', '30', '40'],
                showQuickJumper: true,
                showSizeChanger: true,
                showTotal: (total: any, range: any) => `总共 ${total} 条`,
                size: 'small',
                onShowSizeChange: () => { },
                onChange: () => { },

            }}

        />
    </Card>
}

export default CpTable