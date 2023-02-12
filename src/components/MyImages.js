import styled from "styled-components"
import { useState } from "react";
import PropTypes from 'prop-types'

const MyImages = (props) => {
    // console.log(props.images);
    const [mainImg , setmainImg] = useState(props.images[0])

   

  return (
    <Wrapper>
        {props.images && 
      <div className="productImageBox">
        <div className="fisrtBox">
            {props.images.map(element => {
                return <div className="imgF" key={element.id}>
                    <img src={element.url} alt={element.filename}  onClick={() => setmainImg(element)}/>
                </div>
            })}
             <div className="scrollButtons">
            <button></button>
            <button></button>
        </div>
        </div>
       
        <div className="secondBox">
               <div className="imgS" >
                    <img src={mainImg.url} alt="" />
                </div>
        </div>
      </div>}
    </Wrapper>
  )
}

MyImages.propTypes = {
  images: PropTypes.array
}

MyImages.defaultProps = {
    images: [{url:''}]
  };

const Wrapper = styled.div`
 .scrollButtons{
   display:none;
 }

 .productImageBox{
    display:grid;
    grid-template-columns:0.6fr 1fr;
    gap:1.5rem;
 }

 .fisrtBox{
    display:grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
    width:100%;
    gap:1rem;

    .imgF{
        width:100%;
        img{
            width:100%;
            cursor:pointer;
        }
    }
 }

 imgF img{
    width:100%;
 }

 .secondBox{
    width:100%;
    display:flex;
    align-items:center;
    .imgS{
        width:100%;
        img{
            width:100%;
            cursor:pointer;
        }
    }
 }

 
 @media screen and (max-width:780px){
    .secondBox{
       display:none;
     } 
     .productImageBox {
        grid-template-columns: 1fr;
      }
      .fisrtBox {
        grid-template-columns: repeat(4,90vw);
        grid-template-rows: repeat(1,1fr);
        overflow-x: auto;
      }

     
 }
`
export default MyImages
