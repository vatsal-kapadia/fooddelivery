import Modal from "../UI/Modal";
import CartContext from "../../store/cartContext";
import classes from '/Users/vatsalkapadia/Downloads/React Food Delivery app/fooddelivery/src/components/Cart/Cart.module.css';
import {useContext, useState } from "react";
import CartItem from "./CartItem";
import CartDelivered from "./CartDelivered"

const Cart =(props) =>{
    const cartCtx = useContext(CartContext);
    const [showOrder, setShowOrder] = useState(false);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    };

    const cartItemAddHandler = (item) => {
        cartCtx.addItem({ ...item, amount: 1 });
    };

    const orderHanlder = () => {
        cartCtx.clearall();
        setShowOrder(true);
      };

    const cartItems = (
    <ul className={classes["cart-items"]}>
      {
        cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
          />
      ))}
    </ul>
    );

    return (

      
        <Modal onClose={props.onClose}>
          {!showOrder ? (
          <div>
          {cartItems}
                    <div className={classes.total}>
                        <span>Total Amount</span>
                        <span>{totalAmount}</span>
                    </div>
                    <div className={classes.actions}>
                        <button className={classes["button--alt"]} onClick={props.onClose}>
                        Close
                        </button>
                        {hasItems && (
                        <button className={classes.button} onClick={orderHanlder}>
                            Order
                        </button>
                        )}
                    </div>
          </div>):(<CartDelivered onClose={props.onClose} />)
        }
        </Modal>
    )
}

export default Cart;