import React from 'react'
import styled from 'styled-components'
import {TbTruckDelivery} from  'react-icons/tb'
import {MdSecurity}  from 'react-icons/md'
import {GiSaveArrow}  from 'react-icons/gi'
import {RiSecurePaymentLine}  from 'react-icons/ri'


const Services = () => {
  return (
    <Wrapper>
        <div className="serviceBox">
             <div className="section-1 section">
             <TbTruckDelivery  className='icon' />    
             <p>Super Fast and Free Delivery</p>
             </div>
             <div className="section2 section">  
                <div className="subSec-1">
                    <MdSecurity  className='icon' />
                     <p>Non-contact Shipping</p>
                </div>
                <div className="subSec-2">
                <GiSaveArrow  className='icon' />
                      <p>Money-back Guaranteed</p>
                </div>
             </div>
             <div className="section-3 section">
             <RiSecurePaymentLine  className='icon' />
                <p>Supre Secure Payment System</p>
             </div>
        </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
    .serviceBox{
        max-width:1200px;
        margin:auto;
        display:grid;
        grid-template-columns:auto auto auto;
        gap:30px;
        padding:0px 30px;
        margin-bottom:40px;
        margin-top:70px;
    } 
    .section{
        background:rgba(56, 54, 54, 0.1);
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        gap:15px;
        border-radius:10px;
        height:300px;
    } 
    .subSec-1,.subSec-2{
        background:rgba(56, 54, 54, 0.1);
        width:100%;
        height:140px;
        border-radius:10px;
        display:flex;
        gap:15px;
        justify-content:center;
        align-items:center;
        flex-direction:row;
    }
    .section2{
        background:white !important;
        display:flex;
        gap:20px;
    }
    .icon{
        width: 70px;
        height: 51px;
        color:blue;
    }
    
    @media screen and (max-width:950px){
        .serviceBox{
            grid-template-columns:auto auto;
        } 
        .section-3{
                grid-column: 1 / span 2;
        }
    }
    @media screen and (max-width:590px){
        .serviceBox{
            grid-template-columns: repeat(1, 1fr);
        }
        .section2{
            height:620px;
         }
        
        
        .subSec-1,.subSec-2{
            height:300px;
            flex-direction:column;
        } 
        
        .section{
            max-width:90vw;
        }
        .section-3{
                    grid-column: 1 / span 1;
            }
    }
`

export default Services
