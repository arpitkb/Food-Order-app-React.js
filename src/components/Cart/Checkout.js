import React, { useRef } from "react";
import classes from "./Checkout.module.css";
import useInput from "../../hooks/use-input";

const isValid = (val) => {
    return !(val.trim() === "");
};

const isCodeValid = (val) => {
    if (val.trim().length !== 6) return false;
    for (let a = 0; a < 6; a++) {
        if (val.charCodeAt(a) < 48 || val.charCodeAt(a) > 57) {
            return false;
        }
    }
    return true;
};

function Checkout(props) {
    const {
        reset: resetFName,
        enteredValue: FNameValue,
        valueChangeHandler: FNameChangeHandler,
        isValueValid: isFNameValid,
        hasError: isFNameInvalid,
        blurHandler: FNameBlurHandler,
    } = useInput(isValid);

    const {
        reset: resetLName,
        enteredValue: LNameValue,
        valueChangeHandler: LNameChangeHandler,
        isValueValid: isLNameValid,
        hasError: isLNameInvalid,
        blurHandler: LNameBlurHandler,
    } = useInput(isValid);

    const {
        reset: resetHouseName,
        enteredValue: houseNameValue,
        valueChangeHandler: houseNameChangeHandler,
        isValueValid: isHouseNameValid,
        hasError: isHouseNameInvalid,
        blurHandler: houseNameBlurHandler,
    } = useInput(isValid);

    const {
        reset: resetStreetName,
        enteredValue: streetNameValue,
        valueChangeHandler: streetNameChangeHandler,
        isValueValid: isStreetNameValid,
        hasError: isStreetNameInvalid,
        blurHandler: streetNameBlurHandler,
    } = useInput(isValid);

    const {
        reset: resetCityName,
        enteredValue: cityNameValue,
        valueChangeHandler: cityNameChangeHandler,
        isValueValid: isCitytNameValid,
        hasError: isCityNameInvalid,
        blurHandler: cityNameBlurHandler,
    } = useInput(isValid);

    const {
        reset: resetStateName,
        enteredValue: stateNameValue,
        valueChangeHandler: stateNameChangeHandler,
        isValueValid: isStateNameValid,
        hasError: isStateNameInvalid,
        blurHandler: stateNameBlurHandler,
    } = useInput(isValid);

    const {
        reset: resetPCode,
        enteredValue: pcodeValue,
        valueChangeHandler: pcodeChangeHandler,
        isValueValid: isPCodeValid,
        hasError: isPCodeInvalid,
        blurHandler: pcodeBlurHandler,
    } = useInput(isCodeValid);

    const isFormValid =
        isCitytNameValid &&
        isFNameValid &&
        isHouseNameValid &&
        isLNameValid &&
        isPCodeValid &&
        isStateNameValid &&
        isStreetNameValid;

    const confirmHandler = (event) => {
        event.preventDefault();

        if (!isFormValid) return;

        //submit order

        props.onConfirm({
            first_name: FNameValue,
            last_name: LNameValue,
            house_num: houseNameValue,
            street: streetNameValue,
            city: cityNameValue,
            state: stateNameValue,
            postal_code: pcodeValue,
        });

        resetCityName();
        resetFName();
        resetHouseName();
        resetLName();
        resetStateName();
        resetStreetName();
        resetPCode();
    };

    return ( <
        form className = { classes.form }
        onSubmit = { confirmHandler } >
        <
        div className = "container" >
        <
        div className = "row justify-content-end" >
        <
        div className = "col-6" >
        <
        div className = { `${classes.control}` } >
        <
        label htmlFor = "fname" > First Name < /label> <
        input value = { FNameValue }
        onBlur = { FNameBlurHandler }
        onChange = { FNameChangeHandler }
        id = "fname"
        type = "text" >
        < /input> {
            isFNameInvalid && ( <
                p className = { classes.invalid } > This is a required field < /p>
            )
        } <
        /div> <
        /div> <
        div className = "col-6" >
        <
        div className = { classes.control } >
        <
        label htmlFor = "lname" > Last Name < /label> <
        input value = { LNameValue }
        onBlur = { LNameBlurHandler }
        onChange = { LNameChangeHandler }
        id = "lname"
        type = "text" >
        < /input> { /* {isLNameInvalid && <p className={classes.invalid}>Last Name is required</p>} */ } <
        /div> <
        /div> <
        /div>

        <
        div className = "row" >
        <
        div className = "col-6" >
        <
        div className = { classes.control } >
        <
        label htmlFor = "house" > House No. < /label> <
        input value = { houseNameValue }
        onBlur = { houseNameBlurHandler }
        onChange = { houseNameChangeHandler }
        id = "house"
        type = "text"
        placeholder = "House No / Building No." >
        < /input> {
            isHouseNameInvalid && ( <
                p className = { classes.invalid } > House no.is required < /p>
            )
        } <
        /div> <
        /div> <
        div className = "col-6" > { " " } <
        div className = { classes.control } >
        <
        label htmlFor = "city" > City < /label> <
        input value = { cityNameValue }
        onBlur = { cityNameBlurHandler }
        onChange = { cityNameChangeHandler }
        id = "city"
        type = "text" >
        < /input> {
            isCityNameInvalid && ( <
                p className = { classes.invalid } > City is required < /p>
            )
        } <
        /div> <
        /div> <
        /div> { /* <div className="row"> */ } <
        div className = { classes.control } >
        <
        label htmlFor = "street" > Street Name < /label> <
        input className = { classes.str }
        value = { streetNameValue }
        onBlur = { streetNameBlurHandler }
        onChange = { streetNameChangeHandler }
        id = "street"
        type = "text" >
        < /input> {
            isStreetNameInvalid && ( <
                p className = { classes.invalid } > Street is required < /p>
            )
        } <
        /div> { /* </div> */ }

        <
        div className = "row" >
        <
        div className = "col-6" >
        <
        div className = { classes.control } >
        <
        label htmlFor = "state" > State < /label> <
        input value = { stateNameValue }
        onChange = { stateNameChangeHandler }
        onBlur = { stateNameBlurHandler }
        id = "state"
        type = "text" >
        < /input> {
            isStateNameInvalid && ( <
                p className = { classes.invalid } > State name is required < /p>
            )
        } <
        /div> <
        /div> <
        div className = "col-6" >
        <
        div className = { classes.control } >
        <
        label htmlFor = "code" > Postal Code < /label> <
        input value = { pcodeValue }
        onBlur = { pcodeBlurHandler }
        onChange = { pcodeChangeHandler }
        id = "code"
        type = "text" >
        < /input> {
            isPCodeInvalid && ( <
                p className = { classes.invalid } >
                Please enter a valid Postal Code <
                /p>
            )
        } <
        /div> <
        /div> <
        /div>

        <
        div className = "row row justify-content-evenly" >
        <
        div className = "col-4" > < /div> <
        div className = "col-6 mb-5 mt-5" >
        <
        div className = { classes.actions } >
        <
        button onClick = { props.cancelOrder }
        type = "button" >
        Cancel Order <
        /button> <
        button disabled = {!isFormValid }
        className = { classes.submit } >
        Confirm <
        /button> <
        /div> <
        /div> <
        /div> <
        /div> <
        /form>
    );
}

export default Checkout;