import { createContext, useContext, useEffect, useReducer } from "react";
import { cartReducer } from "./Reducers";

const Cart = createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    cart: [],
  });

  const toggleSaved = function (id, saved) {
    dispatch({
      type: "TOGGLE_SAVED",
      payload: {
        id: id,
        saved: saved,
      },
    });
  };

  return (
    <Cart.Provider value={{ state, dispatch, toggleSaved }}>
      {children}
    </Cart.Provider>
  );
};

export const useCart = () => useContext(Cart);
