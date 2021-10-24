import React, { useContext, useState } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

function Cart(props) {
    const [isCheckingOut, setIsCheckingOut] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [didSubmit, setDidSubmit] = useState(false);
    const cardCtx = useContext(CartContext);

    const totalAmount = `$${cardCtx.totalAmount.toFixed(2)}`;
    const hasItems = cardCtx.items.length > 0;

    const cardItemRemove = (id) => {
        cardCtx.removeItem(id);
        if (!hasItems) {
            setIsCheckingOut(false);
        }
    };

    const cardItemAdd = (item) => {
        cardCtx.addItem(item, 1);
    };

    const checkoutHandler = () => {
        setIsCheckingOut(true);
    };

    const onSubmitOrder = async(userData) => {
        setIsSubmitting(true);
        await fetch(
            "https://react-meals-b5a40-default-rtdb.firebaseio.com/orders.json", {
                method: "POST",
                body: JSON.stringify({
                    user: userData,
                    items: cardCtx.items,
                }),
            }
        );
        setTimeout(() => {
            setIsSubmitting(false);
            setDidSubmit(true);
            cardCtx.clearCart();
        }, 900);
    };

    const cartItems = ( <
        ul className = { classes["cart-items"] } > {
            cardCtx.items.map((item) => ( <
                CartItem key = { item.id }
                name = { item.name }
                price = { item.price }
                amount = { item.amount }
                onAdd = { cardItemAdd.bind(null, item) }
                onRemove = { cardItemRemove.bind(null, item.id) }
                />
            ))
        } <
        /ul>
    );

    let modalActions = ( <
        div className = { classes.actions } >
        <
        button onClick = { props.hideCart }
        className = { classes["button--alt"] } >
        close <
        /button> {
            hasItems && ( <
                button onClick = { checkoutHandler }
                className = { classes["button"] } >
                Order <
                /button>
            )
        } <
        /div>
    );

    const cartModalContent = ( <
        > { cartItems } <
        div className = { classes.total } >
        <
        span > Total amount < /span> <
        span > { totalAmount } < /span> <
        /div> {
            isCheckingOut && hasItems && ( <
                Checkout onConfirm = { onSubmitOrder }
                cancelOrder = { props.hideCart }
                />
            )
        } {!isCheckingOut && modalActions } <
        />
    );

    const cartSubmittingContent = (
        // <div className={`${classes.roller}`}>
        <
        div className = { classes.roller } >
        <
        div > < /div> <
        div > < /div> <
        div > < /div> <
        div > < /div> <
        div > < /div> <
        div > < /div> <
        div > < /div> <
        div > < /div> <
        /div>
        // </div>
    );

    const didSubmitContent = ( <
        >
        <
        p > Congratulations!Your order has been placed! < /p> <
        div className = { classes.actions } >
        <
        button onClick = { props.hideCart }
        className = { classes["button--alt"] } >
        close <
        /button> <
        /div> <
        />
    );

    return ( <
        Modal isSub = { isSubmitting }
        hideCart = { props.hideCart } > {!isSubmitting && !didSubmit && cartModalContent } { isSubmitting && cartSubmittingContent } {!isSubmitting && didSubmit && didSubmitContent } <
        /Modal>
    );
}

export default Cart;