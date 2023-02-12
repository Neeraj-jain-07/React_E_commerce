import { createContext, useContext ,useEffect,useReducer} from "react";
import axios from "axios";
import reducer from '../Reducers/ProductReducer'

// get data by axios 
const API = 'https://api.pujakaitem.com/api/products';


const initialState = {
    isLoading:false,
    isError:false,
    products:[],
    featureProducts:[],
    isSingleLoading:false,
    singleProduct:{}
}


const AppContext = createContext();
const AppProvider = ({children}) => { 

    const [state ,dispatch] =useReducer(reducer,initialState)

    
const getProducts= async(url) => {
    dispatch({ type: "Loading" })
    try {
       const res =await axios.get(url);
       const products = await res.data;
       dispatch({ type: "Set_API_DATA" , payload:products })
    //    console.log(products)
    } catch (error) {
       dispatch({ type:"Error" })
    }
   }

   const getSingleProduct= async(url) => {
    dispatch({ type: "Single_Loading" })
    try {
       const res =await axios.get(url);
       const singleProduct = await res.data;
       dispatch({ type: "Set_Single_API_DATA" , payload:singleProduct })
    } catch (error) {
       dispatch({ type:"Single_Error" })
    }
   }

    useEffect(() => {
        getProducts(API)
        // eslint-disable-next-line
      },[]);

    return <AppContext.Provider value={{...state, getSingleProduct}}>
        {children}
    </AppContext.Provider>
};

const useProductContext = () => {
    return useContext(AppContext)
}
export {AppProvider,useProductContext}