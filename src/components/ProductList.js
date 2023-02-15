import styled from 'styled-components'
import Product from './Product'
import {useFilterContext} from '../context/FilterContext'
import ListViewProduct from './ListViewProduct';

const ProductList = () => {
  const {filter_product,grid_view} = useFilterContext();
   
  if(grid_view){
    return (
      <Wrapper>
         <div className="showAllProducts ">
            {  filter_product.map(product => {
              return <Product key={product.id} product={product}/>
            })}
         </div>
      </Wrapper>
    )
  }
  if(!grid_view){
    return(
      <Wrapper>
      <div className='listView'>
      {  filter_product.map(product => {
        return <ListViewProduct product={product}/>
      })}
      </div>
      </Wrapper>
    )
  }
  
}

const Wrapper = styled.section`
     

   .showAllProducts{
    display:flex;
    padding: 10px 5px 50px 0px;
    flex-wrap:wrap;
    gap:10px;
    margin-bottom:50px;
   }
  .subHeading{
    color: #2220207a;
    font-size: 12px;
  }
  .imgBox{
    // max-width:280px;
  }

  figure img{
     width:100%;
  }

  .fProductBox{
    display:flex;
    justify-content:space-evenly;
    padding: 60px 30px;
    flex-wrap:wrap;
    gap:40px;
  }
  figure{
    position:relative;
  }

  figcaption{
    position: absolute;
    top: 15px;
    color: #888080;
    right: 10px;
    background: white;
    padding: 6px 13px;
    font-weight: bold;
    border-radius: 20px;
    font-size: 12px;
    text-transform: uppercase;
  }

  .desc{
    display:flex;
    justify-content:space-between;
    padding:5px 3px;
    
    
    .price{
       color:#6161b1;
    }
    .name{
        color:grey;
    }
  }

  .box{
    background:white;
    padding:10px 10px;
    border-radius:3px;
    width:31%;
  }

  figure{
     position:relative;
     transition:.3s;
  }
  figure:hover{
    opacity:0.6;
  }
  figure:hover figure::before{
    background:red;
  }

  figure::before{
    content:"";
    position:absolute;
    width:100%;
    height:100%;
    z-index:999;
  }

  .listView{
    display:flex;
    flex-direction:column;
    padding: 0px 15px 80px 0px;
  }

  @media (max-width:780px){
    .box{
      width:49%;
    }
  }
  @media (max-width:580px){
    .box{
      width:80%;
      margin:auto;
    }
  }
`

export default ProductList
