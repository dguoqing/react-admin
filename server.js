const express = require('express')
const bodyParser = require('body-parser');

const app = express()
const Server = require('ws').Server
const ws = new Server({
    port: 9999
})

app.use(bodyParser.json()); // 添加json解析
app.use(bodyParser.urlencoded({
    extended: false
}));

//存user数据
const userMap = new Map([
    ['dgq', {
        username: 'dgq',
        password: '111111',
        remember: false,
    }]
])

app.post('/login', (req, res) => {
    console.log(req.body)
    res.json(getData(req.body))
})
app.get('/logout', (req, res) => {
    res.json({
        code: 0,
        data: {
            flg: true,
        },
        msg: '退出成功！'
    })
})

function setData(key, value) {

}

function getData({
    username,
    password
}) {
    if (userMap.has(username)) {
        if (userMap.get(username).password === password) {
            return {
                code: 0,
                data: {
                    ...userMap.get(username),
                    flg: true,
                },
                msg: '登录成功！'
            }
        } else {
            return {
                code: 500,
                data: {
                    flg: false,
                },
                msg: '密码错误！'
            }
        }

    } else {
        return {
            code: 500,
            data: {
                flg: false,
            },
            msg: '用户不存在，请注册后再登录！'
        }
    }
}
let timer = null;
let index = 0;

//socket
ws.on('connection', (socket) => {
    socket.on('message', (msg) => {
        console.log(msg);

        //给客户端回消息
        socket.send('hello client')
    })
    
    timer = setInterval(() => {
        index++;
        socket.send(`服务器发过来的第${index}条消息`)
    }, 1000);
    socket.on('close',() => {
        console.log(12)
        clearInterval(timer)
    })

})
ws.on('close', () => {
    
})
app.listen(3000, () => {
    console.log('server...')
})