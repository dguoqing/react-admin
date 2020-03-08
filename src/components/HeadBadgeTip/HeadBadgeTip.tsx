import * as React from 'react';
import { Link, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Tabs } from 'antd'
import './headBadgeTip.less'
const { TabPane } = Tabs;

interface IDl {
    title: string,
    date: string,
    img?: string,
}
const list: IDl[] = [
    {
        title: '你推荐的 曲妮妮 已通过第三轮面试',
        date: '3 年前',
        img: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1583556029&di=197efa71761aa223b441cdc77221fe1b&src=http://a0.att.hudong.com/78/52/01200000123847134434529793168.jpg'
    },
    {
        title: '你推荐的 曲妮妮 已通过第三轮面试',
        date: '3 年前',
        img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583567136063&di=2e07ef96de143fc28b7c2df05dd745b5&imgtype=0&src=http%3A%2F%2Fa2.att.hudong.com%2F86%2F10%2F01300000184180121920108394217.jpg'
    },
    {
        title: '你推荐的 曲妮妮 已通过第三轮面试',
        date: '3 年前',
        img:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1830914723,3154965800&fm=26&gp=0.jpg'
    },
    {
        title: '你推荐的 曲妮妮 已通过第三轮面试',
        date: '3 年前',
        img:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1830914723,3154965800&fm=26&gp=0.jpg'
    },
    {
        title: '你推荐的 曲妮妮 已通过第三轮面试',
        date: '3 年前',
        img:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1830914723,3154965800&fm=26&gp=0.jpg'
    },
    {
        title: '你推荐的 曲妮妮 已通过第三轮面试',
        date: '3 年前',
        img:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1830914723,3154965800&fm=26&gp=0.jpg'
    },
    {
        title: '你推荐的 曲妮妮 已通过第三轮面试',
        date: '3 年前',
        img:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1830914723,3154965800&fm=26&gp=0.jpg'
    },
]
const renderDl = (data: IDl[]): any => {
    return <dl className='clearfix'>
        {
            data.map((v: IDl, index: number) => {
                return <div key={index} className='dl-box clearfix'>
                    <dt>
                        <img src={v.img} alt="" />
                    </dt>
                    <dd>
                        <p>{v.title}</p>
                        <p>{index + 1} 年前</p>
                    </dd>
                </div>
            })
        }
    </dl>
}

const HeadBadgeTip: React.FC = () => {
    const {count} = useSelector(({test}:any) => test)
    const callback = () => {

    }
    return <div className='head-badge-tip'>
        <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab={`通知(${count})`} key="1">
                {renderDl(list)}
            </TabPane>
            <TabPane tab={`消息(${0})`} key="2">
                {renderDl(list)}
            </TabPane>
            <TabPane tab={`待办(${0})`} key="3">
                {renderDl(list)}
            </TabPane>
        </Tabs>
        <div className='hbt-bottom '>
            <p className='fl'>
                <a href="">清空</a>&nbsp;&nbsp;
                <a href="">通知</a>
            </p>
            <p className='fr'><a href="">查看更多</a></p>
        </div>
    </div>
}

export default HeadBadgeTip
