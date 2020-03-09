import * as React from 'react'
import { Tabs, Button } from 'antd';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { TabPanStateType, TabPaneType, MenuObj, delPane,IPropsType } from '../../redux/module/tabPanes'

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
        activeKey: ''
    }
    private newTabIndex: any;
    constructor(props: IProps) {
        super(props)
        const panes = [
            { title: 'Tab 1', content: 'Content of Tab Pane 1', key: '1' },
            { title: 'Tab 2', content: 'Content of Tab Pane 2', key: '2' },
        ];
        this.state = {
            activeKey: panes[0].key,
            panes,
        }
    }
    static getDerivedStateFromProps(nextProps: any, prevState: any) {
        console.log(nextProps)
        // this.add(nextProps.pane)

        return nextProps

    }
    onChange = (activeKey: any) => {
        this.setState({ activeKey });
    };

    onEdit = (targetKey: any, action: keyof this) => {
        let a: any = this[action]
        a(targetKey)
    };

    add = (pane: any) => {
        const { panes } = this.state;
        const activeKey = `newTab${this.newTabIndex++}`;
        panes.push({ title: 'New Tab', content: 'New Tab Pane', key: activeKey });
        this.setState({ panes, activeKey });
    };

    remove = (targetKey: any) => {
        console.log('remove',targetKey)
        let { activeKey } = this.state;
        if(this.props.panes[0].key == targetKey) return
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
        return <div style={{ height: '40px', width: '100%', backgroundColor: '#000' }}>
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
