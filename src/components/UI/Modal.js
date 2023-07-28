import { Fragment } from "react";
import  ReactDOM from "react-dom";
import classes from "/Users/vatsalkapadia/Downloads/React Food Delivery app/fooddelivery/src/components/UI/Modal.module.css";



const portalElement= document.getElementById("overlays");
const ModalOverlay = (props) => {

    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}

const Modal =(props) => {

    return (
        <Fragment>
            {ReactDOM.createPortal(<ModalOverlay> {props.children} </ModalOverlay> , portalElement)}
        </Fragment>
    );

};

export default Modal;