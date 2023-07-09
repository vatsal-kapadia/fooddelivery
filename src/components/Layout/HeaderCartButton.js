import Classes from "/Users/vatsalkapadia/Downloads/React Food Delivery app/fooddelivery/src/components/Layout/HeaderCartButton.module.css"
import CartIcon from "../Cart/CartIcon";
const HeaderCartButton = () =>{

    return(
        
        <button className={Classes.button}>
            <span className={Classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={Classes.badge}>4</span>
        </button>
    )
}

export default HeaderCartButton;