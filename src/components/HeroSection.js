import React from "react";
import styled from "styled-components";

const HeroSection = (props) => {

  return (
    <Wrapper>
      <div className="grid mainSection">
        <div className="heroSectionFirst heroSection">
          <h3>Welcome to </h3>
          <h2>{props.data.title}</h2>
          <p>
          Discover Cutting-Edge Electronics at <b>Electrical Store</b> - Elevate Your Lifestyle with the Latest in Mobiles, Laptops, and Digital Watches. Explore Innovative Technology, Unmatched Quality, and Irresistible Deals. Experience Seamless Shopping and Exceptional Customer Service. 
          </p>
          <button>Shop Now</button>
        </div>
        <div className="heroSectionSecond heroSection">
          <img src="/images/hero.jpg" alt="" />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
  .mainSection {
    max-width: 1200px;
    margin: auto;
    margin-top: 20px;
    font-family: 'Open Sans', sans-serif;
  }

  .grid {
    display: grid;
  }

  .mainSection {
    grid-template-columns: repeat(2, 1fr);
  }

  .heroSectionFirst {
    padding: 70px 41px;
    h3 {
      color: #919191;
      margin-bottom: 10px;
    }
    h2 {
      margin-bottom: 10px;
    }
  }

  .heroSectionSecond img {
    width: 100%;
    padding: 50px;
  }

  button{
    border: none;
    outline: none;
    background: blue;
    color: white;
    font-size: 14px;
    padding: 5px 10px;
    margin-top: 10px; 
    transition:0.2s;  
    cursor:pointer;
   }

   button:hover{
    background:#4b82d5;
   }


  @media screen and (max-width: 1000px) {
    h2 {
       font-size:35px;
      }
    .heroSectionFirst {
        padding: 40px 41px;
    }
  }


  @media screen and (max-width: 850px) {
    h2 {
       font-size:32px;
      }
      .heroSectionSecond img {
        padding: 30px;
      }
      .heroSectionFirst {
        padding: 30px 41px;
    }
  }

  @media screen and (max-width: 800px) {
    h2 {
       font-size:25px;
      }
    .heroSectionSecond img {
        margin-top:30px;
        margin-right:20px;
        padding: 10px;
      }
      .heroSectionFirst {
          padding: 20px 30px;
          padding-left:35px;
    }
  }

  @media screen and (max-width : 620px){
    .mainSection {
        grid-template-columns: repeat(1, 1fr);
      }
    .heroSectionFirst {
        padding: 40px;
        padding-bottom:10px;
        padding-left:35px;
    }
    .heroSectionSecond img {
        margin-top:10px;
        margin-right:20px;
        padding: 10px 30px;
      }
  }
`;

export default HeroSection;
