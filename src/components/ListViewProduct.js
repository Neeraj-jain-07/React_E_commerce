import styled from "styled-components"
import PriceFormate from "../Helpers/PriceFormate"
import { Button } from "../styles/Button"
import { Link } from "react-router-dom"

const ListViewProduct = ({ product }) => {
    return (
        <Wrapper>
            <div className="product">
                <div className="img">
                        <figure>
                            <img src={product.image} alt={product.name} />
                        </figure>
                </div>
                <div className="content">
                    <h3>{product.name}</h3>
                    <p><PriceFormate price={product.price} /></p>
                    <p>{product.description.length > 130 ? `${product.description.slice(0, 130)}...` : product.description}</p>
                    {/* <p>{product.description}</p> */}

                    <Link to={`/singleproduct/${product.id}`}>  <Button>See More </Button></Link>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
Button{
    width: fit-content;
    margin-top:15px ;
    margin-bottom: 5px;
}
 
p{
    color:grey;
    overflow: hidden;
    text-overflow: ellipsis;
    max-height: 105px;
}

// p {
//     color:grey;
//     // width: 30%;
//     white-space: nowrap;
//     overflow: hidden;
//     text-overflow: ellipsis;
// }

.img{
    display: flex;
align-items: center;
}



figure{
    img{
        width:100%;
        padding:50px 50px 0px 50px;
        cursor:pointer;
        transition: 0.4s ease-in-out;
    }
    img:hover{
        opacity: 0.6;
        // padding:50px 40px 0px 40px;
    }
}
.product{
    display:grid;
    grid-template-columns: 1fr 1fr;
    border: 1px solid #d5d0d0;
    padding-bottom: 18px;
    margin-bottom: 30px;
    border-radius: 6px;
}

.content{
    display:flex;
    flex-direction:column;
    gap:10px;
    justify-content: end;
    padding-right: 20px;
}

@media (max-width:1080px){
    .content{
       padding-top:25px;
    }
    .product{
        gap: 20px;
    }
    figure{
        img{
            padding: 40px 0px 0px 26px;
        }
    }
}

@media (max-width:940px){
    .product{
        grid-template-columns: 1.3fr 1fr;
    }
}

@media (max-width:690px){

    p{
        max-height: 67px;
    }
}
@media (max-width:540px){
    h3{
        font-size: 2rem;
    }
    p{
        max-height: 50px;
    }
}
@media (max-width:470px){
    p{
        max-height: 37px;
    }
}
`

export default ListViewProduct
