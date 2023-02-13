
const cartReducer = (state,action) => {
   if(action.type ==="ADD_TO_CART"){
    console.log("data is ",action.payload)
    const {id , amount , color , product } = action.payload

    let cartProduct ;
    cartProduct ={
        id:id+color,
        name:product.name,
        color,
        amount,
        image:product.image[0].url,
        price:product.price,
        max:product.stock
    }
    return{
        ...state,
        cart:[
            ...state.cart,
            cartProduct
        ]
    }
   }
   if(action.type ==='DELETE_TO_CART'){
    console.log("payload",action.payload)
    console.log(state.cart)
    let filterCart = state.cart.filter(curPro =>{ 
        console.log(curPro.id,action.payload)
        console.log(curPro.id ===action.payload)
      return  curPro.id !==action.payload
    })
    return{
        ...state,
        cart:filterCart
        
    }
   }
}

export default cartReducer
