import  React,{useState} from 'react'
import { Button } from 'antd'
import useOnclickOutside from "react-cool-onclickoutside";
import './productTwo.less'



const ProductTwo: React.FC = () => {

    const [visible,setVisible] = useState(false)
    const ref = useOnclickOutside(() => {
        setVisible(false);
      });
    
return <div>
        ProductTwo
        {visible && <div ref={ref} className='tip_contanier'>

        </div>}
    <Button className="ignore-onclickoutside" onClick={() => setVisible(true)}>点击</Button>
    </div>
}
export default ProductTwo