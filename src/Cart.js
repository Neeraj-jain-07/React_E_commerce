import styled from "styled-components";
import CartItem from "./components/CartItem";
import { useCartContext } from "./context/cartContext";
import { Button } from "./styles/Button";
import { Link } from "react-router-dom";
import PriceFormate from "./Helpers/PriceFormate";

const Cart = () => {
  const {cart,clearCart,total_price,shipping_fee} = useCartContext();
  // console.log(cart)

  if(cart.length ===0) {
    // console.log("ok")
  return <Wrapper2>
   <h3 className="emptycart">
    <img src="/images/emptyCart.png" alt="" />
    </h3>
    </Wrapper2>
   }

  return <Wrapper>
    <h3 className="t-c " >Cart</h3>
     <div className="cartProduct">
       <div className="productBoxs-heading t-c grid g-5-cols">
          <div className="1"><p className="t-c">ITEM</p></div>
          <div className="2"><p>PRICE</p></div>
          <div className="3"><p>QUANTITY</p></div>
          <div className="four"><p>SUBTOTAL</p></div>
          <div className="5"><p>REMOVE</p></div>
       </div>
       <hr />
       <div className="cart-item t-c">
        {
          cart.map((curElem) => {
            return <CartItem key={curElem.id} {...curElem}/>
          })
        }
       </div>
       <hr />
       <div className="btnBox">
       <Link to="/products"><Button>Go to shopping</Button></Link> 
        <Button onClick={clearCart} className='clear'>Clear Cart</Button>
       </div>

      <div className="wrapPriceSummary d-f">
              <div className="priceSummary d-f">
                  <div className="subtotal d-f fd-row">
                    <p>Subtotal: </p>
                    <h3> <PriceFormate price={total_price}/> </h3>
                  </div>

                  <div className="shipping_fee d-f fd-row">
                    <p>Shipping Fee: </p>
                    <h3> <PriceFormate price={shipping_fee}/> </h3>
                  </div>
                  <hr />
                  <div className="Order_total d-f fd-row">
                    <p>Order Total: </p>
                    <h3> <PriceFormate price={total_price + shipping_fee}/> </h3>
                  </div>
              </div>
       </div>
     </div>
    </Wrapper>;
};

const Wrapper2 = styled.section`
.emptycart{
  text-align: center;
  padding: 50px;
}
@media (max-width:480px){
  .emptycart img{
   width:180px;
  }
}
`

const Wrapper = styled.section`
   .wrapPriceSummary{
      justify-content:end;
      margin:20px;
      margin-top:50px;
   }
  .priceSummary{
    width: 300px;
    gap: 10px;
    padding: 20px;
    flex-direction:column;
    background: #ebebeb57;
    border-radius: 5px;
  }
  .d-f{
    display: flex;
  }

  .fd-row{
    flex-direction:row;
    justify-content: space-between;
    p{
      color:grey;
    }
    h3{
      font-size:19px;
    }
  }
.btnBox{
  display: flex;
  justify-content: space-between;
  padding: 10px;
  .clear{
    background: red;
  }
  .clear:hover{
   opacity:0.6;
  }
}


   min-height:75vh;
  .t-c{
    text-align:center;
  }
  padding: 5rem 0;
  .grid{
    display:grid;
    gap: 0rem;
  }
  .g-5-cols{
    grid-template-columns:repeat(5,1fr)
  }
  .productBoxs-heading{
    p{
      color:grey;
    }
  }

  .cartProduct{
    max-width: 900px;
    margin: auto;
    width: 85%;
    margin-top: 40px;
  }
  .t-c{
    text-align:center;
  }

  .grid-four-column {
    grid-template-columns: repeat(4, 1fr);
  }

  .grid-five-column {
    grid-template-columns: repeat(4, 1fr) 0.3fr;
    text-align: center;
    align-items: center;
  }
  .cart-heading {
    text-align: center;
    text-transform: uppercase;
  }
  hr {
    margin-top: 1rem;
  }
  .cart-item {
    padding: 3.2rem 0;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
  }

  .cart-user--profile {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1.2rem;
    margin-bottom: 5.4rem;

    img {
      width: 8rem;
      height: 8rem;
      border-radius: 50%;
    }
    h2 {
      font-size: 2.4rem;
    }
  }
  .cart-user--name {
    text-transform: capitalize;
  }
  .cart-image--name {
    /* background-color: red; */
    align-items: center;
    display: grid;
    gap: 1rem;
    grid-template-columns: 0.4fr 1fr;
    text-transform: capitalize;
    text-align: left;
    img {
      max-width: 5rem;
      height: 5rem;
      object-fit: contain;
      color: transparent;
    }

    .color-div {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 1rem;

      .color-style {
        width: 1.4rem;
        height: 1.4rem;

        border-radius: 50%;
      }
    }
  }

  .cart-two-button {
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;

    .btn-clear {
      background-color: #e74c3c;
    }
  }

  .amount-toggle {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2.4rem;
    font-size: 1.4rem;

    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }

    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }

  .remove_icon {
    font-size: 1.6rem;
    color: #e74c3c;
    cursor: pointer;
  }

  .order-total--amount {
    width: 100%;
    margin: 4.8rem 0;
    text-transform: capitalize;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;

    .order-total--subdata {
      border: 0.1rem solid #f0f0f0;
      display: flex;
      flex-direction: column;
      gap: 1.8rem;
      padding: 3.2rem;
    }
    div {
      display: flex;
      gap: 3.2rem;
      justify-content: space-between;
    }

    div:last-child {
      background-color: #fafafa;
    }

    div p:last-child {
      font-weight: bold;
      color: ${({ theme }) => theme.colors.heading};
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-five-column {
      grid-template-columns: 1.5fr 1fr 0.5fr;
    }
    .cart-hide {
      display: none;
    }

    .cart-two-button {
      margin-top: 2rem;
      display: flex;
      justify-content: space-between;
      gap: 2.2rem;
    }

    .order-total--amount {
      width: 100%;
      text-transform: capitalize;
      justify-content: flex-start;
      align-items: flex-start;

      .order-total--subdata {
        width: 100%;
        border: 0.1rem solid #f0f0f0;
        display: flex;
        flex-direction: column;
        gap: 1.8rem;
        padding: 3.2rem;
      }
    }
  }

  @media (max-width:550px){
    .img{
      flex-direction: column;
      .showColor{
        flex-direction: row;
      }
      p{
        text-align:start;
      }
    }

    .sSubTotal{
      display:none;
    }
    .four{
      display:none;
    }
    .g-5-cols{
      grid-template-columns: repeat(4,1fr);
    }
  }
`;

export default Cart;
