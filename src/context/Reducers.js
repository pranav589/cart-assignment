export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      };
    case "CHANGE_CART_QTY":
      return {
        ...state,
        cart: state.cart.filter((c) =>
          c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
        ),
      };
    case "TOGGLE_SAVED": {
      const newCartItems = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      const itemToChange = state.cart[itemIndex];
      itemToChange.saved = !action.payload.saved;
      newCartItems.splice(itemIndex, 0, itemToChange);
      return {
        cart: newCartItems,
      };
    }
    default:
      return state;
  }
};
