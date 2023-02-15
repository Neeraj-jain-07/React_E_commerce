import {useState} from 'react'
import styled from 'styled-components'
import {GiCheckMark} from 'react-icons/gi'  // right mark
import AddToItem from './AddToItem'
import {Button} from '../styles/Button'
import { Link } from 'react-router-dom'
import { useCartContext } from '../context/cartContext'
import  toast, { Toaster } from 'react-hot-toast';

const AddToCart = ({product}) => {
  const [color ,setColor ] = useState(product.colors[0]);
  const [amount ,setAmount  ] = useState(1);
  const {id,stock} = product;
  const {addToCart} = useCartContext();
 
  const checkAndIncreaseAmount = () => {
    toast.success('Product is out of stock , try again later')
    setAmount(stock)
  }

  const amountDecrease = () => {
    amount > 1 ? setAmount(amount - 1): setAmount(1);
  }
  const amountIncrease = () => {
    amount < stock ? setAmount(amount + 1) : checkAndIncreaseAmount();
  }


  return (
    <Wrapper>
      <Toaster/>
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
          
           <Link to='/cart'>
           <Button onClick={() => {addToCart(id ,color,amount,product)}}> ADD TO CART </Button>
           </Link>
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
// AddToItem.js li style
   .setItemAdd{
    display:flex;
    gap:20px;
    align-items: center;
    padding: 20px 4px;
  }
`

export default AddToCart;
