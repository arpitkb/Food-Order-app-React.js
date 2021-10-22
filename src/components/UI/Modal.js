import React from "react";
import classes from "./Modal.module.css";
import ReactDom from "react-dom";

const Backdrop = (props) => {
  return <div onClick={props.hideCart} className={classes.backdrop}></div>;
};

const ModalOverlay = (props) => {
  if (!props.isSub) {
    return (
      <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
      </div>
    );
  } else {
    return (
      <div className={classes.modal2}>
        <div className={classes.content}>{props.children}</div>
      </div>
    );
  }
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
        <ModalOverlay isSub={props.isSub}>{props.children}</ModalOverlay>,
        overlayElement
      )}
    </>
  );
}

export default Modal;
