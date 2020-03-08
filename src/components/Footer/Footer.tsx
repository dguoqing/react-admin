
import * as React from 'react'
import { connect, } from 'react-redux';
import { Layout } from 'antd'
import moment from 'moment'

import './footer.less'
const { Footer } = Layout

class Foot extends React.Component<any>{
    constructor(props: any) {
        super(props)
    }
    render() {
        return <Footer >
            <footer>
                React-Admin ©{moment().format('YYYY')} Created by 865470087@qq.com  <span style={{color:'#09f'}}>footer:{this.props.count}</span>
            </footer>
        </Footer>
    }
}
export default connect(({ test }: any): any => ({ count: test.count }))(Foot)