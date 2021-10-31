import React from "react";
import classes from "./Header.module.css";
import HeaderCardButton from "./HeaderCardButton";

function Header(props) {
  return (
    <>
      <nav className={`${classes.nav} navbar sticky-top`}>
        <div className="container">
          <h3 className={`${classes.head} navbar-brand mx-auto`}>
            ReactJS Meals
          </h3>
          <HeaderCardButton onClick={props.showCart}>
            Your Cart
          </HeaderCardButton>
        </div>
      </nav>
      <div className={classes["main-image"]}>
        <img
          alt="Food"
          src="https://images.unsplash.com/photo-1523294587484-bae6cc870010?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1302&q=80"
        ></img>
      </div>
    </>
  );
}

export default Header;
