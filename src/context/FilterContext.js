import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./ProductContext";
import reducer from "../Reducers/FilterReducer"

const initialState = {
    filter_product: [],
    all_product: [],
    grid_view: true,
    sorting_value: "#",
    filters:{
        text:"",
        category:"All",
        company:"All",
        color:"All",
        maxprice:0,
        price:0,
        minprice:0
    },
}

const filterContext = createContext()

export const FilterProvider = ({ children }) => {
    const { products } = useProductContext()
    const [state, dispatch] = useReducer(reducer, initialState)

    const setGridView = () => {
        dispatch({type:"SET_GRID_VIEW"})
    }
    const setListView = () => {
        dispatch({type:"SET_LIST_VIEW"})
    }

    const sorting = (e) => {
        dispatch({ type: "GET_SORT_VALUE",payload:e.target.value });
      };

    const searchProduct = (e) => {
        // console.log("sorting appling", e.target.value)
        // console.log("sorting appling", e.target.name)
        dispatch({ type: "SET_FILTERS_VALUE",payload:{name:e.target.name, value:e.target.value} });
    }

    const clearFilter = () => {
        dispatch({ type: "CLEAR_ALL_FILTER" });
    }


    useEffect(() => {
        dispatch({type:'APPLY_FILTER'})
        dispatch({type:'SORTING_PRODUCTS'});
    },[products, state.sorting_value , state.filters ])

    // here product is include because if api send more data than it will add that data also

    useEffect(() => {
        dispatch({ type: "LOAD_FILTER_PRODUCT", payload: products })
    }, [products])
   

    return <filterContext.Provider value={{ ...state,setGridView,setListView ,sorting, searchProduct ,clearFilter}}>
        {children}
    </filterContext.Provider>
}

export const useFilterContext = () => {
    return useContext(filterContext)
}