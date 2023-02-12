const productReducer = (state,action) => {
    switch(action.type){
        case "Loading": 
            return {  ...state,isLoading:true};
        case "Set_API_DATA":
            const featureProducts = action.payload.filter((item) => item.featured === true)
            return {
                ...state ,
                 isLoading:false,
                 products:action.payload,
                 featureProducts:featureProducts
                }
        case 'Error':
            return { ...state, isLoading:false , isError:true };
        
        case "Single_Loading":
                return {...state, isSingleLoading:true }
        case "Set_Single_API_DATA":
                return { 
                    ...state ,
                    isSingleLoading:false,
                    singleProduct:action.payload
                 }
        case  "Single_Error":
            return { ...state, isSingleLoading:false , isError:true };
        default:
            return state;
    }
}

export default productReducer;