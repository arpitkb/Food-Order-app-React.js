import React, { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

function Cart(props) {
  const cardCtx = useContext(CartContext);

  const totalAmount = `$${cardCtx.totalAmount.toFixed(2)}`;
  const hasItems = cardCtx.items.length > 0;

  const cardItemRemove = (id) => {
    cardCtx.removeItem(id);
  };

  const cardItemAdd = (item) => {
    cardCtx.addItem(item, 1);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cardCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onAdd={cardItemAdd.bind(null, item)}
          onRemove={cardItemRemove.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  return (
    <Modal hideCart={props.hideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.hideCart} className={classes["button--alt"]}>
          close
        </button>
        {hasItems && (
          <button disabled={true} className={classes["button"]}>
            Order
          </button>
        )}
      </div>
    </Modal>
  );
}

export default Cart;
