import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./ProductContext";
import reducer from "../Reducers/FilterReducer"

const initialState = {
    filter_product: [],
    all_product: [],
    grid_view: false,
}

const filterContext = createContext()

export const FilterProvider = ({ children }) => {
    const { products } = useProductContext()
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        dispatch({ type: "LOAD_FILTER_PRODUCT", payload: products })
    }, [products])


    const setGridView = () => {
        dispatch({type:"SET_GRID_VIEW"})
    }
    const setListView = () => {
        dispatch({type:"SET_LIST_VIEW"})
    }
   

    return <filterContext.Provider value={{ ...state,setGridView,setListView }}>
        {children}
    </filterContext.Provider>
}

export const useFilterContext = () => {
    return useContext(filterContext)
}