import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../Reducers/cartReducer'
const CartContext = createContext()

const getCart = () => {
   let localCart = localStorage.getItem('cart')
   // if(!localCart){
   //    return []
   // }else{
   //    return JSON.parse(localCart)
   // }
   let parseData = JSON.parse(localCart)
   if(!Array.isArray(parseData)) return [];
   return parseData
}

const initialState ={
    cart:getCart(),   // it will run only once when web page load
    total_item:'',
    total_price:'',
    shipping_fee:5000,
}

export const CartProvider = ({children}) => {
   
     const [state , dispatch] = useReducer(reducer,initialState)
     const addToCart = (id ,color,amount,product) =>{
        dispatch({type:"ADD_TO_CART",payload:{id ,color,amount,product}})
     }

     const deleteItem=(id) => {
        dispatch({type:"DELETE_TO_CART",payload:id})
     }

     const clearCart =() => {
        dispatch({type:'CLEAR_CART'})
     }

     const amountDecrease = (id) => {
      dispatch({type:"DESCREASE_AMOUNT",payload:id})
     }
     const amountIncrease = (id) => {
      dispatch({type:"INCREASE_AMOUNT",payload:id})
     }

     useEffect(() =>{
        dispatch({type:"UPDATE_SHOWPRICE_IN_CART_&_LOGO"});
        localStorage.cart =JSON.stringify(state.cart) ;
     },[state.cart])   // issue execute every time with state dependency 

     return <CartContext.Provider value={{...state,addToCart,deleteItem,clearCart,amountDecrease,amountIncrease}}>
        {children}
     </CartContext.Provider>
}

export const  useCartContext = () => {
    return useContext(CartContext)
}