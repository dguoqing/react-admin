import React, { useState } from 'react';
import { Form, Row, Col, Input, Button, Card } from 'antd';
import { DownOutlined, UpOutlined } from '@ant-design/icons'
import './searchform.less'

interface IProps {
    search: (data: any) => void,
    inputList:any[]
}
const SearchForm: React.FC<IProps> = ({ search ,inputList}) => {
    const [expand, setExpand] = useState(false);
    const [form] = Form.useForm();
    const getFields = () => {
        return inputList.map((v:any) => {
            return <Col xxl={6} lg={8} md={12} sm={12} key={v.key}>
            <Form.Item
                name={v.key}
                label={v.label}
                rules={[
                    {
                        // required: true,
                        message: 'Input something!',
                    },
                ]}
            >
                <Input placeholder="请输入" />
            </Form.Item>
        </Col>
        })
    };

    return <Card className='search-box'>
        <Form
            form={form}
            name="advanced_search"
            className="ant-advanced-search-form"
            onFinish={search}
        >
            <Row gutter={24}>{getFields()}</Row>
            <Row>
                <Col span={24} style={{ textAlign: 'right' }}>
                    <Button type="primary" htmlType="submit">
                        查询</Button>
                    <Button style={{ marginLeft: 8 }} onClick={() => { form.resetFields()}}>
                        重置</Button>
                    <a
                        style={{ marginLeft: 8, fontSize: 12 }}
                        onClick={() => {
                            setExpand(!expand);
                        }}
                    >
                        {/* {expand ? <UpOutlined /> : <DownOutlined />} {expand ? '折叠' : '展开'} */}
          </a>
                </Col>
            </Row>
        </Form>
    </Card >
}

export default SearchForm