import React, { useContext, useEffect, useState } from "react";
import classes from "./HeaderCardButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

function HeaderCardButton(props) {
  const cartCtx = useContext(CartContext);

  const [isBump, setIsBump] = useState(false);

  const { items } = cartCtx;

  const btnClasses = `${classes.button} ${isBump ? classes.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) return;
    setIsBump(true);

    const timer = setTimeout(() => {
      setIsBump(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  const numberOfCartItems = items.reduce((curr, item) => {
    return curr + item.amount;
  }, 0);

  return (
    <button onClick={props.onClick} className={btnClasses}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>{props.children}</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
}

export default HeaderCardButton;
