import React from "react";
import classes from "./Modal.module.css";
import ReactDom from "react-dom";

const Backdrop = (props) => {
  return <div onClick={props.hideCart} className={classes.backdrop}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const overlayElement = document.querySelector("#overlays");

function Modal(props) {
  return (
    <>
      {ReactDom.createPortal(
        <Backdrop hideCart={props.hideCart} />,
        overlayElement
      )}
      {ReactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        overlayElement
      )}
    </>
  );
}

export default Modal;
