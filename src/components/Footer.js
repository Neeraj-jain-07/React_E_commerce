import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    return (
        <Wrapper >
            <div className="shortFooter d-f">
                <div className="sec1">
                    <p>Ready to get started</p>
                    <p>Talk to us today</p>
                </div>
                <div className="sec1">
                    <button type="submit">Get Started</button>
                </div>
            </div>
            <div className="borderFotter">
                <div className="fotter d-f">
                    <div className="firstSec d-f f-d-col section">
                        <p>Thapa Technical</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, ex! </p>
                    </div>
                    <div className="secondSec d-f f-d-col section">
                        <p>Subscribe to get important updates</p>
                        <input type="email" name="subEmail" placeholder='Your E-mail' />
                        <button type="submit">Subscribe</button>
                    </div>
                    <div className="thirdSec d-f f-d-col section">
                        <p>Follow Us</p>
                        <div className="icons d-f">
                            <i className="fa-brands fa-instagram"></i>
                            <i className="fa-brands fa-youtube"></i>
                            <i className="fa-brands fa-discord"></i>
                        </div>
                    </div>
                    <div className="fourthSec  d-f f-d-col section">
                        <p>Call us</p>
                        <p>+91 1234567891</p>
                    </div>
                </div>
                <hr />
                <div className="fotterSecond d-f">
                    <div className="f-second-item-1">
                        <p> @2023 ThapaTechnical . All Right is reserved</p>
                    </div>
                    <div className="f-second-item-2">
                        <p>Privacy Policy</p>
                        <p>Terms & Conditions</p>
                    </div>
                </div>
                
            </div>

        </Wrapper>
    )
}

const Wrapper = styled.div`
     .d-f{
        display:flex;
     }
     .f-d-col{
        flex-direction:column;
        
     }
     .borderFotter{
        background:#000054;
        color:white;
     }
    .fotter{
         max-width:1200px;
         margin:auto;
         justify-content:space-evenly;
         gap:30px;
         padding:130px 10px;
         flex-wrap:wrap;
         margin-top:-40px;

    }
    .section{
        max-width:15%;
        min-width:230px;
        gap:15px;
    }
    .icons{
         gap:10px;
    }
    i{
        width: 40px;
        height: 40px;
        line-height: 38px;
        border: 2px solid white;
        color: white;
        border-radius: 50%;
        text-align: center;
        font-size: 20px;
        cursor:pointer;
        transition:.5s ease-in-out;
    }
    i:hover{
        color:red;
        border-color:red;
    }

    button{
        border: none;
        outline: none;
        width: fit-content;
        padding: 4px 10px;
        cursor: pointer;
        background: red;
        color: white;
        font-weight: bold;
        transition:.3s;
    }

    button:hover{
        background:#e47070;
    }

    .fotterSecond{
        max-width:1200px;
        margin: auto ;
        padding:10px 40px 40px;
        flex-wrap:wrap;
        justify-content:space-evenly;
        gap:15px;
        
    }

    .f-second-item-1{
        max-width:20%;
        min-width:300px;
    }
    .f-second-item-2{
        max-width:20%;
        min-width:300px;
    }

    .shortFooter{
        position: relative;
        background:white;
        padding:20px 40px;
        justify-content:space-between;
        width:800px;
        margin:auto;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
    @media screen and (max-width:1000px){
        .shortFooter{
            width:75%;
        }
    }
    

`

export default Footer
