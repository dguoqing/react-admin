import * as React from 'react'
import { useEffect, useState } from 'react'


const Home = (props: any) => {
    const [socketMessage, setSocketMessage] = useState('')
    const createWebSocket = () => {
        const ws: any = new WebSocket('ws://localhost:9999')

        ws.onopen = () => {
            ws.send('hello server')
        }

        ws.onmessage = (res: MessageEvent) => {
            console.log('MessageEvent', res)
            setSocketMessage(res.data)
        }
        return ws
    }
    useEffect(() => {
        // const ws = createWebSocket()

        return () => {
            // ws.send('guanbi')
            // ws.close()
        }
    }, [])

    return <div>
        Homep
            <p>{socketMessage}</p>
    </div>
}
export default Home
