import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useProductContext } from './context/ProductContext'
import PageNavigation from "./components/PageNavigation";
import PriceFormate from "./Helpers/PriceFormate";
import { TbTruckDelivery } from 'react-icons/tb'
import { TbReplace } from 'react-icons/tb'
import { SiSpringsecurity } from 'react-icons/si'
import { MdHighQuality } from 'react-icons/md'
import MyIamges from './components/MyImages'
import AddToCart from "./components/AddToCart";



const API = 'https://api.pujakaitem.com/api/products';

const SingleProduct = () => {
  const { id } = useParams();
  const { getSingleProduct, singleProduct, isSingleLoading } = useProductContext()

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
    // eslint-disable-next-line
  }, []);

  const { id: alias, name, company, price, description, image, stock, stars, reviews } = singleProduct;
  if (isSingleLoading) {
    return <h2>Loading ....</h2>
  }
  const starsReal = getStars(stars)
  function getStars(rating) {

    // Round to nearest half
    rating = Math.round(rating * 2) / 2;
    let output = [];
 
    // Append all the filled whole stars

  // 4.5
    for (var i = rating; i >= 1; --i) {
      output.push('<i class="fa fa-star" aria-hidden="true" style="color: gold;"></i>&nbsp;');

      // If there is a half a star, append it
      if (i === 1.5) {
        output.push('<i class="fa-solid fa-star-half-stroke" aria-hidden="true" style="color: gold;"></i>&nbsp;');
      }
     
    }
    // Fill the empty stars
    for (let i = (5 - rating); i >= 1; i--)
      output.push('<i class="fa-regular fa-star" aria-hidden="true" style="color: gold;"></i>&nbsp;');
    return output.join('')


  }



  return <Wrapper>
    
    <PageNavigation name={name} />
    <div className="container">
      <div className="productSection">
        <div className="imgSection">
          <MyIamges images={image} />
        </div>
        <div className="descriptionSection">
          <h3>{name}</h3>
          <p > <span dangerouslySetInnerHTML={{ __html: starsReal }}></span> ({stars})</p>
          
          <p>{reviews} reviews</p>
          <p> <span>MRP : <del> <PriceFormate price={price + 250000} /> </del> </span> </p>
          <p className="dod">Deal of the Day : <PriceFormate price={price} /></p>
          <p>{description} </p>
          <div className="productPolicy">
            <div>
              <TbTruckDelivery className="icon" />
              <p>Free Delivery</p>
            </div>
            <div>
              <TbReplace className="icon" />
              <p>30 Days Replacement</p>
            </div>
            <div>
              <SiSpringsecurity className="icon" />
              <p>2 years warranty</p>
            </div>
            <div>
              <MdHighQuality className="icon" />
              <p>Built Quality</p>
            </div>
          </div>
          <p>Available : <span>{stock > 0 ? "In stock" : "Out of Stock"} </span> </p>
          <p>ID : <span> {alias}</span></p>
          <p>Brand : <span>{company}</span> </p>
          <hr  className="hrLess"/>
          {stock > 0 && 
          <div className="colorBox">
               <AddToCart  product={singleProduct}/>
          </div> }
        </div>
        
        {/* {stock > 0 && } */}
      </div>
    </div>
  </Wrapper>;
};

const Wrapper = styled.section`
// code for image frame
.container{
  padding-bottom: 60px;
}
 .imgSection{
    display: flex;
    align-items: center;
 }


// code of product description
 span{
  font-weight:bold;
  color:black;
 }
 p{
  color: gray;
 }
 .dod{
  color:blue;
 }
 .productPolicy {

  display: flex;
  justify-content: space-evenly;
  gap: 20px;
  bottom-border: 2px solid red;   
  border-bottom: 1px solid gray;
  text-align:center;
  padding-top:20px;
  
  p{
  font-size:10px;
  }

  .icon{
    width:30px;
    height:30px;
    margin-bottom:5px;
  }
 }
 
 .descriptionSection{
    display: flex;
    flex-direction: column;
    gap: 7px;
 }
 .productSection{
  display: grid;
  justify-content: center;
  grid-template-columns: 40% 40%;
  padding: 45px 10px;
  gap: 5rem;
 }
 
 @media only screen and (max-width: 1000px) {
  .productSection {
      grid-template-columns: 50% 45%;
    }
}
 @media only screen and (max-width: 780px) {
  .productSection {
      grid-template-columns: 1fr;
    }
}
.hrLess{
  width:85%;
}
`;

export default SingleProduct;
