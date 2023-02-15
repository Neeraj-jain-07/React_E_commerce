import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/cartContext";
import { useAuth0 } from "@auth0/auth0-react";


const Nav = styled.nav`
  .header {
    display: flex;
    justify-content: space-between;
    padding: 0px 0px 0px 20px;
    background: #bfbfbf12;
  }
  .navbar {
    display: flex;
    padding: 2rem;
    gap: 50px;
    margin-right: 30px;
    align-items: center;
  }
  .alink {
    font-size: 18px;
    color: black;
    transition: 0.4s;
    font-weight: 501;
  }

  .alink:hover {
    color: #a99f9f;
  }

  .alink i {
    font-size: 31px;
    color: blue;
  }

  .hamberger {
    display: none;
  }

  .logo {
    width: 150px;
  }
  .logo img {
    margin-top: 16px;
    width: 100%;
  }

  .d-none {
    display: none;
  }

  .cart {
    position: relative;
  }

  .cart-item-notification {
    position: absolute;
    background: red;
    color: white;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    text-align: center;
    line-height: 24px;
    top: -10px;
    right: -10px;
  }

  @media screen and (max-width: 780px) {
    .navbar {
      display: none;
    }
    .hamberger {
      display: block;
      font-size: 30px;
      padding: 14px;
      margin-right: 14px;
    }
    .hamberger i{
      cursor: pointer;
    }

    .active {
      display: flex;
      flex-direction: column;
      margin-top: 100px;
      margin-left: -74px;
    }

    img {
      width: 100%;
      margin-top: 11px;
    }
  }
`;

const Navbar = () => {
   
  const { loginWithRedirect } = useAuth0();
  const {total_item } = useCartContext();
 
  const [hamberger, sethamberger] = useState(false);

  const navbarRenderUp = () => {
    sethamberger(true);
  };
  const navbarRenderDown = () => {
    sethamberger(false);
  };

  const login = () => {
    loginWithRedirect();
    navbarRenderDown();
  }
  return (
    <Nav>
      <div className="header">
        <div className="logo">
          <img src="/images/logo.png" alt="" />
        </div>
        <div className={hamberger ? "navbar active" : "navbar"}>
          <Link to="/" className="alink" onClick={navbarRenderDown}>
            Home
          </Link>
          <Link to="/about" className="alink" onClick={navbarRenderDown}>
            About
          </Link>
          <Link to="/products" className="alink" onClick={navbarRenderDown}>
            Products
          </Link>
          <Link to="/contact" className="alink" onClick={navbarRenderDown}>
            Contact
          </Link>
          <Link to="/login" className="alink" onClick={login}>
            Login
          </Link>
          <Link to="/cart" className="alink cart">
            <i className="fa-sharp fa-solid fa-cart-shopping" onClick={navbarRenderDown}></i>
            <span className="cart-item-notification">{total_item}</span>
          </Link>
        </div>
        <div className="hamberger">
          <i
            className={`fa-solid fa-bars ${!hamberger ? "" : "d-none"}`}
            onClick={navbarRenderUp}
          ></i>
          <i
            className={`fa-solid fa-xmark  ${hamberger ? "" : "d-none"}`}
            onClick={navbarRenderDown}
          ></i>
        </div>
      </div>
    </Nav>
  );
};

export default Navbar;
