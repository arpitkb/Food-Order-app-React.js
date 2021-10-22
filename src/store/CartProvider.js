import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    if (!action.qty) action.qty = action.item.amount;
    const newTotal = state.totalAmount + action.item.price * action.qty;

    const index = state.items.findIndex((el) => el.id === action.item.id);
    const existItem = state.items[index];
    let updatedItems;
    if (existItem) {
      const updatedItem = {
        ...existItem,
        amount: existItem.amount + action.qty,
      };
      updatedItems = [...state.items];
      updatedItems[index] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    return {
      items: updatedItems,
      totalAmount: newTotal,
    };
  } else if (action.type === "REMOVE") {
    const index = state.items.findIndex((el) => el.id === action.id);
    const existItem = state.items[index];
    // console.log(existItem);
    const newTotal = state.totalAmount - existItem.price;

    let currAmount = existItem.amount;
    let updatedItems;
    if (currAmount > 1) {
      const updatedItem = {
        ...existItem,
        amount: existItem.amount - 1,
      };
      updatedItems = [...state.items];
      updatedItems[index] = updatedItem;
    } else {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    }

    return {
      items: updatedItems,
      totalAmount: newTotal,
    };
  } else if (action.type === "CLEAR") {
    return defaultCartState;
  }
  return defaultCartState;
};

function CartProvider(props) {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCart = (item, qty) => {
    dispatchCartAction({
      type: "ADD",
      item: item,
      qty: qty,
    });
  };

  const removeItemFromCart = (id) => {
    dispatchCartAction({
      type: "REMOVE",
      id: id,
    });
  };

  const clearCartHandler = () => {
    dispatchCartAction({
      type: "CLEAR",
    });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
    clearCart: clearCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;
