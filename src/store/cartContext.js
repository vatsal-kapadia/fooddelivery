import React from "react";


const cartContext = react.createContext ({

    items: [],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {},
    clearall: () => {},


});

export default cartContext;