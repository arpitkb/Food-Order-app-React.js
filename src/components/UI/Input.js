import React from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={`${classes.group} input-group input-group-sm mb-2`}>
      <label className={`input-group-text`} htmlFor={props.input.id}>
        {props.label}
      </label>
      <input ref={ref} className={`form-control`} {...props.input} />
    </div>
  );
});

export default Input;
