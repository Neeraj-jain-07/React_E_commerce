import React from 'react'
import { Link } from 'react-router-dom'
import PriceFormate from '../Helpers/PriceFormate'

const Product = (props) => {
    return (
        <>
            <div className="box">
                <Link to={`/singleproduct/${props.product.id}`}>
                    <div className="item">
                        <div className="imgBox">
                            <figure>
                                <img src={props.product.image} alt={props.product.name} />
                                <figcaption>{props.product.category}</figcaption>
                            </figure>
                        </div>
                    </div>
                </Link>
                <div className='desc'>
                    <p className='name'>{props.product.name}</p>
                    <p className='price'>    
                    <PriceFormate price={props.product.price}/>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Product
