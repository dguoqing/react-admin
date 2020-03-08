import * as React from 'react'

interface IProps{
    routes:any
}


const PruductThree = (props:IProps) => {
    return <div>
        PruductThree

        <div>
            {props.routes}
        </div>
    </div>
}
export default PruductThree