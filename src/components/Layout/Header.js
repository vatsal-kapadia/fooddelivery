import { Fragment } from "react";
import classes from "/Users/vatsalkapadia/Downloads/React Food Delivery app/fooddelivery/src/components/Layout/Header.module.css";
import mainHeaderImg from "/Users/vatsalkapadia/Downloads/React Food Delivery app/fooddelivery/src/assets/image.jpeg";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) =>{

    return(
        <Fragment>
            <header className={classes.header}>
                <h1>K</h1><h2>itchen <br/>
                 ourier </h2>
                <HeaderCartButton onClick={props.onShowCart}/>
            </header>
            <div className={classes["main-image"]}>
                <img src={mainHeaderImg} alt=" Indian Food" />
            </div>
        </Fragment>
    )

}

export default Header;
