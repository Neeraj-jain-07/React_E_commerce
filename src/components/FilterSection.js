import React from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../context/FilterContext'
import {GiCheckMark} from 'react-icons/gi'
import PriceFormate from '../Helpers/PriceFormate'
import { Button } from '../styles/Button'


const FilterSection = () => {
  const { searchProduct, all_product,clearFilter ,filters} = useFilterContext();
  const {color,category,price,maxprice , minprice ,text} = filters;

  const getUniqeData = (data, field) => {
    let res = data.map(product => {
      return product[field];
    })
    
    if(field === 'colors'){
      // return res = ["All", ...new Set([].concat(...res))]
      // res = [].concat(...res)
      res = res.flat()
    }
    return res = ["All", ...new Set(res)] 
  }

  const categoryOnlyData = getUniqeData(all_product, "category");
  const companyOnlyData = getUniqeData(all_product, "company");
  const colorOnlyData = getUniqeData(all_product, "colors");
  


  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <Wrapper>
      <div className="filterBox">
        <div className="searchProduct">
          <input type="text" name="text" id="" autoComplete='off' value={text} placeholder='search product' onChange={searchProduct} />
        </div>
        {/* category data here */}
        <div className="category">
          <h3 className='t-center'>Category</h3>
          <div className="categoryfield">
            {categoryOnlyData.map((curEle, i) => {
              return <button type='button' key={i} name='category' className={category ===curEle?"active":''}  onClick={searchProduct} value={curEle}>
                {capitalizeFirstLetter(curEle)}      {/*  challenge add active class to currect clicked button */}
              </button>
            })}
          </div>
        </div>

        {/* company data here */}
        <div className="company">
          <h3 className='t-center'>Company</h3>
          
            <select name='company' id='company' onClick={searchProduct}>
              {companyOnlyData.map((curEle, i) => {
                return <option className='company' value={curEle} key={i}> {capitalizeFirstLetter(curEle)} </option> // option tag is not of dom it's provided by operating system
              })}
            </select>
        
        </div>

        {/* color data here */}
        <div className="colors">
          <h3 className='t-center'>Colors</h3>
          <div className="colorsfield">
            {
              colorOnlyData.map((curEle , i) => {
                return <button style={{background:curEle}} className={ color==="All" && curEle==="All"?"activeColor allBtn":curEle === 'All'? "allBtn ":'btn'}  key={i} type="button" name='color' value={curEle} onClick={searchProduct}>
                   {color ==='All' ?"": color === curEle ? <GiCheckMark className={curEle ==="#CDD0D0"? 'markOpp' : 'mark'} /> : null}
                  {curEle=== 'All'? "All":''}
                </button>
              })
            }
          </div>
        </div>

         {/* range price here */}
         <div className="rangePrice">
         <h3 className='t-center'>Price</h3>
         <p><PriceFormate price={price}/></p>
         <input type="range" name="price" max={maxprice} min={minprice} value={price} onChange={searchProduct} />
         </div>

         {/* clear filter button */}
         <div className="clearFilter">
           <Button onClick={clearFilter}>Clear Filter</Button>
         </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`

input[type=range] {
  // -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
  background: transparent; /* Otherwise white in Chrome */
}

   .searchProduct{
    text-align: center;
   }
   .filterBox{
      padding:20px 10px;
   }
   input:focus-visible {
    outline: 1px solid black;
    border-radius: 3px;
}
   label{
    font-size:18px;
    color:black;
   }

   .t-center{
    text-align:center;
    margin-top:20px;
    margin-bottom:10px;
   }

   .categoryfield{
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;

   button{
    width: 140px;
    border: none;
    border-radius: 10px;
    margin: auto;
    padding: 2px 30px;
    cursor: pointer;
   }
   .active{
    background: blue;
    color: white;
  }
   }
   }

  select{
    width: 90%;
    box-sizing: border-box;
    padding: 5px 10px;
    margin: auto;
    cursor:pointer;
  }

    .btn{
      background: rgb(0, 0, 0);
      width: 20px;
      height: 20px;
      border-radius: 50%;
      border: none;
      cursor:pointer;
      margin: 0px 2px;
    }
    .allBtn{
      background:none;
      border:none;
      border-bottom:1.5px solid white;
      margin-right: 6px;
      cursor:pointer;
    }
    .company{
      form{
        text-align: center;
        select{
          max-width:300px;
        }
      }
    }

    .rangePrice{
      text-align: center;
    }

    .colorsfield{
      display: flex;
    align-items: center;
    margin-top: 19px;
    }
    .mark{
      color:white;
     }
     .markOpp{
      color:black;
     }
     .activeColor{
      border-bottom:1.5px solid blue;
    }

    .clearFilter{
      text-align: center;
      margin: 41px 0px;

      button{
        background: red;
        &:hover{
          opacity:0.6;
        }
      }

    }

    @media (max-width:787px){
      .colorsfield{
        display: flex;
        justify-content: center;
      }
      .box{
        padding: 3rem 20px;
      }
     
    }
    
    
`

export default FilterSection


// {/* <input type="radio" id="age1" name="category" value="30" />
// <label htmlFor="age1">0 - 30</label><br />
// <input type="radio" id="age2" name="category" value="60" />
// <label htmlFor="age2">31 - 60</label><br />
// <input type="radio" id="age3" name="category" value="100" />
// <label htmlFor="age3">61 - 100</label><br /> <br /> <br /> */}


// {/* <form onSubmit={(e) => e.preventDefault()}>
//                 <input type="radio" id="allProduct"  name="category" value="all" onChange={searchProduct}/>
//                 <label htmlFor="allProduct">All</label><br />

//                 <input type="radio" id="mobile" name="category" value="mobile" onChange={searchProduct} />
//                 <label htmlFor="mobile">Mobile</label><br />

//                 <input type="radio" id="laptop" name="category" value="laptop" onChange={searchProduct} />
//                 <label htmlFor="laptop">Laptop</label><br /> 

//                 <input type="radio" id="watch" name="category" value="watch" onChange={searchProduct} />
//                 <label htmlFor="watch">Watch</label><br /> 
//                 <input type="radio" id="computer" name="category" value="computer" onChange={searchProduct} />
//                 <label htmlFor="computer">Computer</label><br /> 

//                 <input type="radio" id="accessories" name="category" value="accessories" onChange={searchProduct} />
//                 <label htmlFor="accessories">Accessories</label><br /> 
//           </form> */}