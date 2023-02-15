import styled from "styled-components"
import PriceFormate from '../Helpers/PriceFormate'
import { AiFillDelete } from 'react-icons/ai'
import { useCartContext } from "../context/cartContext"
import AddToItem from "./AddToItem"

import { Toaster } from 'react-hot-toast';


const CartItem = ({ id, name, image, color, price, amount }) => {
    const { deleteItem,amountDecrease,amountIncrease } = useCartContext()
    // const amountDecrease = () => {
    //     // amount > 1 ? setAmount(amount - 1): setAmount(1);
    //     console.log("id of item is : ",id)
    // }

    // const amountIncrease = () => {
    //     // amount < stock ?  setAmount(amount + 1): setAmount(stock);
    //     console.log("id of item is : ",id)
    // }
    return (
        <Wrapper>
            <Toaster />
            <div className="grid g-5-cols">
                <div className="img d-f">
                    <figure >
                        <img src={image} alt={id} />
                    </figure>
                    <div>
                        <p>{name}</p>
                        <div className="showColor d-f">
                            <p>color:</p><div className="productColorShow" style={{ background: color }}></div>
                        </div>
                    </div>
                </div>
                <div className="sPrice t-c">
                    <p><PriceFormate price={price} /></p>
                </div>
                <div className="sAmount t-c">


                    <div className="InDecBtn">
                        <AddToItem amount={amount} amountDecrease={()=>amountDecrease(id)} amountIncrease={() =>amountIncrease(id)} />
                    </div>

                </div>
                <div className="sSubTotal t-c">
                    <p><PriceFormate price={price * amount} /></p>
                </div>
                <div className="sDelteIcon t-c">
                    <AiFillDelete className="icon" onClick={()=>deleteItem(id)} />
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    .d-f{
        display:flex;
    }

    .img{
        gap: 5px;
    }
    .showColor{
        align-items: center;
        gap:4px;
    }
   .productColorShow{
    width:16px;
    height:16px;
    border-radius:50%;
   }

   figure{
    width:75px;
    img{
        width:100%;
    }
   }

   .sDelteIcon{
   .icon{
    color: red;
    width: 30px;
    height: 30px;
    cursor:pointer;
   }
}

   .setItemAdd{
    display: flex;
    justify-content: center;
    gap: 12px;
    align-items: center;
   }
`

export default CartItem
