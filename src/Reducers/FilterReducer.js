
const filterReducer = (state, action) => {
         
       
       if (action.type === "LOAD_FILTER_PRODUCT") {   // in switch case we cann't destructure same object in different case
              let arrPrice =action.payload.map( (currElem) => currElem.price)
              // console.log(Math.max.apply(arrPrice))
              let maxprice = arrPrice.reduce((a,b) => Math.max(a,b),0)
              // console.log(highPrice)
              // console.log(Math.max(...arrPrice))
              // maxprice = maxprice/100;
              return {                               // issue solved  : use block scope whenever destructure data  
                     ...state,                        //   from object in switch case
                     filter_product: [...action.payload],
                     all_product: [...action.payload],
                     filters:{...state.filters ,maxprice,price:maxprice}
              }
       }
       if (action.type === "SET_GRID_VIEW") {
              return {
                     ...state,
                     grid_view: true
              }
       }
       if (action.type === "SET_LIST_VIEW") {
              return {
                     ...state,
                     grid_view: false
              }
       }
       if (action.type === "GET_SORT_VALUE") {
              return {
                     ...state,
                     sorting_value: action.payload,
              }
       }
       if (action.type === "SORTING_PRODUCTS") {
              const { filter_product, sorting_value } = state  // 1 issue filter_prodect is changing by copy refrence 
              let tempSortProduct = [...filter_product]    // issue solved because we'r return updated filterProduct 52 68
              const sortProducts = () => {
                     switch (sorting_value) {
                            case 'a-z':
                                   return tempSortProduct.sort((a, b) => a.name.localeCompare(b.name))
                            case 'z-a':
                                   return tempSortProduct.sort((a, b) => b.name.localeCompare(a.name))
                            case 'lowest':
                                   return tempSortProduct.sort((a, b) => a.price - b.price)
                            case 'highest':
                                   return tempSortProduct.sort((a, b) => b.price - a.price)
                            case '#':
                                   return tempSortProduct.sort((a, b) => a.id.localeCompare(b.id)); // this is using all_product to show data show no filter will apply on it 
                            default:
                                   return tempSortProduct
                     }
              }
              let newSortData = sortProducts();
              return {
                     ...state,
                     filter_product: newSortData,
              };
       }
       if (action.type === "SET_FILTERS_VALUE") {
              const { name ,value} =  action.payload   
              // console.log(value ,"value")  
              // console.log(name ,"name")  
              return {
                     ...state,
                    filters:{
                       ...state.filters,
                       [name]:value
                     }
                    
              }
       }
    
       if(action.type === "APPLY_FILTER"){
               const {all_product} =state;
               let tempProduct = [...all_product]
               const {text , category , company , color,price} = state.filters;
                if(text){
                     tempProduct=   tempProduct.filter(product => {
                            return product.name.toLowerCase().includes(text)
                     })
                }
               
                if(category !== "All"){
                     tempProduct=   tempProduct.filter(product => {
                            return product.category ===category
                            // return product.category.toLowerCase().includes(category)
                     })
                }

                if(company !== "All"){
                     tempProduct=   tempProduct.filter(product => {
                            return product.company ===company
                            // return product.category.toLowerCase().includes(category)
                     })
                }
                if(color !=="All"){
                     tempProduct=   tempProduct.filter(product => {
                            return product.colors.includes(color)
                     })
                }

                if(price === 0){
                     tempProduct=   tempProduct.filter(product => {
                            return product.price ===price
                     })
                }else{
                     tempProduct=   tempProduct.filter(product => {
                            return product.price <=price
                     })
                }

              //  console.log("filtered array ",tempProduct)
               return {
                     ...state,
                     filter_product: tempProduct,
              };
       }
       if(action.type === 'CLEAR_ALL_FILTER'){
            
              return {
                     ...state,
                    filters:{
                     ...state.filters,
                     text:"",
                     category:"All",
                     company:"All",
                     color:"All",
                     maxprice:state.filters.maxprice,
                     price:state.filters.maxprice,
                     minprice:0
                    }
              };
       }
}
export default filterReducer;


// let userSortValue = document.getElementById("sort");
              // let sort_value = userSortValue.options[userSortValue.selectedIndex].value;


  //  let newSortData ;
//  if(state.sorting_value === 'a-z'){
              //   newSortData=tempSortProduct.sort((a,b)=>  a.name.localeCompare(b.name))
              //  }

              //  if(state.sorting_value === 'z-a'){
              //   newSortData=tempSortProduct.sort((a,b)=>  b.name.localeCompare(a.name))
              //  }

              //  if(state.sorting_value === 'lowest'){
              //   newSortData=tempSortProduct.sort((a,b)=>  a.price -b.price)
              //  }

              //  if(state.sorting_value === 'highest'){
              //   newSortData=tempSortProduct.sort((a,b)=>  b.price -a.price)
              //  }

              //  if(state.sorting_value === '#'){
              //        newSortData=tempSortProduct
              //  }





              // this can be use for seaching product by it's name 
              // if (action.type === "GET_SEARCH_VALUE") {
              //        const { all_product} =  state                   
              //        console.log(state.filter_product)
              //        console.log(all_product)
              //        let tempProduct = [...all_product]
              //        var searchProduct = tempProduct.filter(function (product) {
              //               console.log(product.name.toLowerCase().includes(action.payload), "hu main");
              //               return product.name.toLowerCase().includes(action.payload)
              //        });
              //        console.log(action.payload)
              //        console.log(searchProduct)
              //        return {
              //               ...state,
              //               filter_product: searchProduct,
              //        }
              // }