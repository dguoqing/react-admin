import * as React from 'react'
import { Tabs, Button } from 'antd';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { TabPanStateType, TabPaneType, MenuObj, delPane,IPropsType } from '../../redux/module/tabPanes'
import './tab.less'

const { TabPane } = Tabs;

interface IState {
    panes: any[],
    activeKey: string
}
interface IProps extends IPropsType {
 
}

class Tab extends React.Component<IProps, IState>{
    state: IState = {
        panes: [],
        activeKey: '1'
    }
    
    constructor(props: IProps) {
        super(props)
    }
    static getDerivedStateFromProps(nextProps: any, prevState: any) {
        console.log(nextProps)
        // this.add(nextProps.pane)

        return nextProps

    }
    onChange = (activeKey: any) => {
        console.log('onChange',activeKey,typeof activeKey)
        this.setState({ activeKey });
    };

    onEdit = (targetKey: any, action: keyof this) => {
        let a: any = this[action]
        a(targetKey)
    };

    add = (pane: any) => {
        console.log('addddddd')
       
    };

    remove = (targetKey: any) => {
        console.log('remove',targetKey,typeof targetKey)
        let { activeKey } = this.state;
        if(this.props.panes[0].key === targetKey) return
        let lastIndex: any;
        this.state.panes.forEach((pane, i) => {
            if (pane.key == targetKey) {
                lastIndex = i - 1;
            }
        });
        const panes = this.state.panes.filter(pane => pane.key != targetKey);
        if (panes.length && activeKey == targetKey) {
            if (lastIndex >= 0) {
                activeKey = panes[lastIndex].key;
            } else {
                activeKey = panes[0].key;
            }
        }
        const {delPane} = this.props
        delPane({ panes, activeKey })

    };
    render() {
        console.log(this.state)
        console.log(this.props)
        const { activeKey, panes } = this.props
        return <div className='tab'>
            <Tabs
                hideAdd
                onChange={this.onChange}
                activeKey={activeKey}
                type="editable-card"
                onEdit={this.onEdit}
            >
                {panes.map((pane: MenuObj) => (
                    <TabPane tab={<Link to={pane.linkTo}>{pane.title}</Link>} key={pane.key + ''}>
                    </TabPane>
                ))}
            </Tabs>
        </div>
    }
}


export default connect(({ tabPanes }: TabPanStateType<TabPaneType>) => tabPanes, { delPane })(Tab)
