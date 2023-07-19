import cartContext from "./cartContext";

const defaultCartState = {
    items: [],
    totalAmount: 0,
  };


const cartReducer = (state, action) => {

    if(action.type === "ADD"){

    }

    if(action.type === "REMOVE"){
        
    }

    if(action.type === "CLEARALL"){
        
    }

};

const cartProvider = (props) => {
    
    const [cartState, dispatchcartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = (item)=> {

        dispatchcartAction({ type: "ADD", item: item });
    };

    const removeItemFromCartHandler = (item)=> {

        dispatchcartAction({ type: "REMOVE", id: id });
    };

    const clearAllItemsFromCartHandler = (item)=> {

        dispatchcartAction({ type: "CLEARALL" });
    };

    const cartContext={
        items:cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
        clearall: clearAllItemsFromCartHandler,

    };

    return (
        <cartContext.provider value={cartContext}>
            {props.children}
        </cartContext.provider>
    );
}

export default cartProvider;