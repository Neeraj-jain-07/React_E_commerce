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
}

.img{
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
`

export default ListViewProduct
