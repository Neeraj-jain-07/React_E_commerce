import {useState} from 'react'
import styled from 'styled-components'
import {GiCheckMark} from 'react-icons/gi'  // right mark
import AddToItem from './AddToItem'
import {Button} from '../styles/Button'
import { Link } from 'react-router-dom'

const AddToCart = ({product}) => {
  const [color ,setColor ] = useState(product.colors[0]);
  const [amount ,setAmount  ] = useState(1);
  const {stock} = product;
  const amountDecrease = () => {
    amount > 1 ? setAmount(amount - 1): setAmount(1);
  }
  const amountIncrease = () => {
    amount < stock ?  setAmount(amount + 1): setAmount(stock);
  }

  return (
    <Wrapper>
       <div className="cBox">
         <p className='btnBox'>Color :
              {product.colors.map((currColor ,index) => {
                return <button 
                         key={index}
                         className={color === currColor ? "btnColor active":"btnColor"}
                         style={{background:currColor}}
                         onClick={()=>setColor(currColor)}
                        >
                          {color === currColor ? <GiCheckMark className={currColor ==="#CDD0D0"?'markOpp': 'mark'} /> : null}
                        </button>
              } )}
           </p> 

           <div className="addToItem">
            <AddToItem amount={amount} amountDecrease={amountDecrease} amountIncrease={amountIncrease}/>
           </div>
          
           
           <Button> <Link to="/cart">ADD TO CART </Link></Button>
       </div>
    </Wrapper>
  )
}


const Wrapper = styled.div`
   .btnColor{
        width: 22px;
        height: 22px;
        border-radius:50%;
        border: none;
        outline: none;
        cursor:pointer;
        opacity:1;
        &:hover{
          opacity:1;
        }
   }

   .active{
    opacity:1 ;
   }
   .mark{
    color:white;
   }
   .markOpp{
    color:black;
   }

   .btnBox{
       display:flex;
       gap:10px;
       align-items: center;
       
   }
`

export default AddToCart;
