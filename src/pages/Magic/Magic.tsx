/*
 * @Author: 董国庆 
 * @Date: 2021-10-28 16:39:47 
 * @Last Modified by: 董国庆
 * @Last Modified time: 2021-10-28 16:43:28
 * 动画
 */

import * as React from 'react'
import { StyleSheet,css } from 'aphrodite'
import { swap } from 'react-magic'


const styles = StyleSheet.create({
    magic:{
        animationName:swap,
        animationDuration:'1s'
    }
})
const Magic: React.FC = () => {
    return <div>
        <div className={css(styles.magic)}>
        Magic
        </div>
    </div>
}
export default Magic