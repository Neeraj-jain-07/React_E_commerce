import styled from 'styled-components'
import {BsGridFill,BsList} from 'react-icons/bs'
import { useFilterContext } from '../context/FilterContext'

const Sort = () => {
  const {grid_view,setListView,setGridView , filter_product} = useFilterContext();
  console.log(grid_view)
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
          <p>selectbox</p>
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

  button:hover{
   color:white;
   background:#a6a6ad;
  }

  .prodoct-count{
    p{
      font-size:19px;
    }
  }
`

export default Sort
