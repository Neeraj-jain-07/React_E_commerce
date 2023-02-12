import styled from 'styled-components'
import { useProductContext } from '../context/ProductContext'
import Product from './Product';

const FeaturedProjucts = () => {
    const {isLoading , featureProducts}  = useProductContext();
    const s1 = {
        textAlign: "center",
        height: "45vh",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        background:"#0000000f",
        fontWeight:"bold"
    }
    if(isLoading){
        return <h2 style={s1}>Loading.....</h2>
    }
    return (
        <Wrapper>
            
            <div className="wholeContainer">
                <div className="container">
                   <p className='subHeading'>ORDER NOW</p>
                   <h3>Our Feature Services</h3>
                   <div className="fProductBox">
                    {featureProducts.map(product => {
                        return <Product key={product.id} product={product}/>
                    })}
                   </div>
                </div>
            </div>

        </Wrapper>
    )
}
const Wrapper = styled.section`
  .wholeContainer{
    background:#0000000f;
  }
  .container{
    max-width:1200px;
    padding:30px 35px;
  }
  .subHeading{
    color: #2220207a;
    font-size: 12px;
  }
  .imgBox{
    width:280px;
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
`

export default FeaturedProjucts
