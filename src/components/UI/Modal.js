import { Fragment } from "react";
import { ReactDOM } from "react";
import classes from "/Users/vatsalkapadia/Downloads/React Food Delivery app/fooddelivery/src/components/UI/Modal.module.css";

const portalElement= document.getElementById("overlays");
const modalOverlay = (props) => {

    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}

const Modal =() => {

    return (
        <Fragment>
            {ReactDOM.createPortal(<modalOverlay> {props.children} </modalOverlay> , portalElement)}
        </Fragment>
    );

};

export default Modal;