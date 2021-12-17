/*
 * @Author: 董国庆 
 * @Date: 2021-10-28 16:30:01 
 * @Last Modified by: 董国庆
 * @Last Modified time: 2021-10-28 16:30:58
 * 响应式
 */

import * as React from 'react'
import MediaQuery from 'react-responsive'


const Responsive: React.FC = () => {
    return <div>
    <h1>Device Test!</h1>
    <MediaQuery minWidth={1224}>
      <p>You are a desktop or laptop</p>
      <MediaQuery minWidth={1824}>
        <p>You also have a huge screen</p>
      </MediaQuery>
    </MediaQuery>
    <MediaQuery minResolution="2dppx">
      {/* You can also use a function (render prop) as a child */}
      {(matches:any) =>
        matches
          ? <p>You are retina</p>
          : <p>You are not retina</p>
      }
    </MediaQuery>
  </div>
}
export default Responsive