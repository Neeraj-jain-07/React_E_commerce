import React from 'react'
import styled from 'styled-components'

const TrustedSection = () => {
  return (
    <Wrapper>
      <div className="trustedSection">
        <h3>Trusted By 1000+ Companies</h3>
       <div className="mainSection">
         <div className="section">
            <img src="/images/section/apple.png" alt="" />
         </div>
         <div className="section">
            <img src="/images/section/bajaj.png" alt="" />
         </div>
         <div className="section">
            <img src="/images/section/huawei2.png" alt="" />
         </div>
         <div className="section">
            <img src="/images/section/rose.png" alt="" />
         </div>
         <div className="section">
            <img src="/images/section/uber.png" alt="" />
         </div>
       </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  .trustedSection{
     background:  #0000000f;
     padding-bottom: 45px;
     margin-bottom:50px;
    h3{
        font-size:25px;
        text-align:center;
        margin-top: 50px;
        margin-bottom: 20px;
        padding-top:30px;
        padding-bottom:15px;
    }
  }

  .mainSection{
    
    max-width:1200px;
    margin:auto;
    display:flex;
    justify-content:center;
    align-items:center;
  }
  
  .section{
    // background:yellow;
  }

  .section img{
    width:100%;
  }

  @media screen and (max-width:780px){
    .section{
        max-width:200px;
      }
    .mainSection{
        flex-wrap:wrap;
        gap:30px;
     }
  }

  @media screen and (max-width:540px){
    .section{
        max-width:200px;
      }
    .mainSection{
        flex-directoin:column;
        gap:30px;
     }
  }

`

export default TrustedSection
