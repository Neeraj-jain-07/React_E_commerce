import styled from 'styled-components'
import {BsGridFill,BsList} from 'react-icons/bs'
import { useFilterContext } from '../context/FilterContext'

const Sort = () => {
  const {grid_view,setListView,setGridView , filter_product , sorting} = useFilterContext();
  return (
    <Wrapper>
      <div className="box">
         <div className="icon">
            <button className={grid_view ? 'active':''}  onClick={setGridView}><BsGridFill/></button>
            <button className={!grid_view ? 'active':''} onClick={setListView}><BsList/></button>
         </div>
         <div className="prodoct-count">
           <p>{ filter_product.length} total product</p>
         </div>

         {/*  selectbox  */}
         <div className="selectbox">
          <form action="#">
            <label htmlFor="sort"></label>
            <select name="sort" id="sort" 
              onClick={sorting}>


              <option value="#">Sort by - featured</option>
              <option value="lowest">Price (lowest)</option>
              {/* <option value="#" disabled></option> */}

              <option value="highest">Price (highest)</option>
              {/* <option value="#" disabled></option> */}

              <option value="a-z">Price (a-z)</option>
              {/* <option value="#" disabled></option> */}

              <option value="z-a">Price (z-a)</option>
              {/* <option value="#" disabled></option> */}
            </select>
          </form>
         </div>
      </div>
     

    </Wrapper>
  )
}

const Wrapper = styled.div`
  .box{
    padding:4rem 20px;
    display:flex;
    justify-content:space-between;

    .icon{
      display:flex;
      gap:10px;
    }
  }

  .active{
    color:white;
    background:black;
  }

  button{
    padding: 4px 7px;
    cursor: pointer;
    text-align: center;
    border: none;
  }
  select,option{
    cursor:pointer;
  }

  button:hover{
   color:white;
   background:#a6a6ad;
  }

  .prodoct-count{
    p{
      font-size:19px;
    }
  }

  #sort{
    padding: 5px 18px;
  }
`

export default Sort
