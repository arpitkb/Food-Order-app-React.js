import React, { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

function MealItemForm(props) {
  const [isValid, setIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    // console.log(enteredAmountNumber);
    // console.log(enteredAmount.length);

    if (
      enteredAmount.length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <>
      {!isValid && <p>Please enter a valid amount</p>}
      <form onSubmit={submitHandler} className={classes.form}>
        <Input
          label="Amount"
          ref={amountInputRef}
          input={{
            id: "amount_" + props.id,
            type: "Number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1",
          }}
        />
        <button>Add</button>
      </form>
    </>
  );
}

export default MealItemForm;
