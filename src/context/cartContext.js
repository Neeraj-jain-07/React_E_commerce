import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../Reducers/cartReducer'
const CartContext = createContext()

const initialState ={
    cart:[],
    total_item:'',
    total_amount:'',
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

     useEffect(() =>{
        
     },[state.cart])

     return <CartContext.Provider value={{...state,addToCart,deleteItem}}>
        {children}
     </CartContext.Provider>
}

export const  useCartContext = () => {
    return useContext(CartContext)
}