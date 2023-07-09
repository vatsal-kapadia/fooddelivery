import { Fragment } from "react";
import classes from "/Users/vatsalkapadia/Downloads/React Food Delivery app/fooddelivery/src/components/Layout/Header.module.css";
import mainHeaderImg from "/Users/vatsalkapadia/Downloads/React Food Delivery app/fooddelivery/src/assets/the-best-top-10-indian-dishes.jpeg";
import HeaderCartButton from "./HeaderCartButton";
const Header = () =>{

    return(
        <Fragment>
            <header className={classes.header}>
                <h1>K</h1><h2>itchen <br/>
                 ourier </h2>
                <HeaderCartButton className={classes.header.HeaderCartButton}/>
            </header>
            <div className={classes["main-image"]}>
                <img src={mainHeaderImg} alt=" Indian Food" />
            </div>
        </Fragment>
    )

}

export default Header;
