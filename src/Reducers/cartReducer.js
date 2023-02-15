import toast  from 'react-hot-toast';

const cartReducer = (state, action) => {
    if (action.type === "ADD_TO_CART") {
        const { id, amount, color, product } = action.payload

        let isProductExist = state.cart.find(curPro => curPro.id === id + color);
        if (isProductExist) {
            let updateCart = state.cart.map((currEle) => {
              if (currEle.id === id + color) {
                console.log("okkkkk")
                    currEle.amount += amount;
                    if(currEle.amount > currEle.max){
                        currEle.amount = currEle.max;
                    }
                    return {
                        ...currEle
                    }
                }
                else {
                    console.log("I am good for morning ....")
                    return currEle
                }
            })
            return{
                ...state,
                cart:updateCart
            }
        }
        else{
            let cartProduct;
            cartProduct = {
                id: id + color,
                name: product.name,
                color,
                amount,
                image: product.image[0].url,
                price: product.price,
                max: product.stock
            }
            return {
                ...state,  
                cart: [
                    ...state.cart,
                    cartProduct
                ]
            }
        }
    }
    if (action.type === 'DELETE_TO_CART') {

        let filterCart = state.cart.filter(curPro => {
            return curPro.id !== action.payload
        })
        return {
            ...state,
            cart: filterCart

        }
    }
    if (action.type === 'CLEAR_CART') {
        return {
            ...state,
            cart: []

        }
    }
    if(action.type === 'DESCREASE_AMOUNT'){
        let updateCart = state.cart.filter( currPro => {
            if(currPro.id === action.payload){
                currPro.amount -= 1;
                if(currPro.amount <1){
                    currPro.amount =1
                }
                // if(currPro.amount>1) state.total_item = state.total_item -1;
                return currPro;
            }
            else{
                return {...currPro}
            }
        })
        return { 
            ...state,
            cart:updateCart
        }      
    }
    if(action.type === 'INCREASE_AMOUNT'){
        let updateCart = state.cart.filter( currPro => {
            if(currPro.id === action.payload){
                currPro.amount += 1;
                if(currPro.amount >currPro.max){
                    toast.success("No more item is available for this product")
                    currPro.amount =currPro.max
                }
                // if(currPro.amount<currPro.max) state.total_item = state.total_item +1;
            
                return currPro;
            }
            else{
                return {...currPro}
            }
        })
        return { 
            ...state,
            cart:updateCart
        }   
    }
  

    if(action.type === 'UPDATE_SHOWPRICE_IN_CART_&_LOGO'){
        // rest this function 
        // const manage = () => { }
        let {updataTotalPrice,updatedItem} = state.cart.reduce((init,currProduct) => {
              init.updataTotalPrice +=currProduct.price * currProduct.amount;
              init.updatedItem +=currProduct.amount;

              return init
        },{
            updataTotalPrice:0,
            updatedItem : 0
        })
        // let updataTotalPrice = state.cart.reduce((init , currProduct ) =>     init + (currProduct.price * currProduct.amount), 0)
        // let updatedItem = state.cart.reduce((init , currProduct) =>    init + currProduct.amount,0);
        console.log(updataTotalPrice)
        return{
            ...state,
            total_price:updataTotalPrice,
            total_item:updatedItem
        }
           // let updataTotalPrice = state.cart.map(currProduct => currProduct.price*currProduct.amount);
        // updataTotalPrice = updataTotalPrice.reduce((init , curValue ) => init + curValue,0)

    }
}

export default cartReducer
