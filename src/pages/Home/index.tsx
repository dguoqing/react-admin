import * as React from 'react'

// class Home extends React.Component<Object>{

//     render(){
//         return <div>Home</div>
//     }
// }

const Home = (props:any) => {
    console.log(props)
    return <div>Homep
        <div>
            {props.routes}
        </div>
    </div>
}
export default Home
