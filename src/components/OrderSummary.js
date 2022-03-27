import React from "react";
import { Button } from "react-bootstrap";
import { useCart } from "../context/Context";

function OrderSummary({ itemsInCart }) {
  const {
    state: { cart },
  } = useCart();

  const totalPrice = itemsInCart.reduce(
    (prev, curr) =>
      (prev += (curr.qty * (100 * curr.price)) / (100 - curr.discount)),
    0
  );
  const totalPriceWithDiscount = itemsInCart.reduce(
    (prev, curr) => (prev += curr.qty * curr.price),
    0
  );
  return (
    <div className="summary">
      <span className="title">Subtotal ({itemsInCart.length}) items</span>
      <span style={{ fontWeight: 700, fontSize: 20 }}>
        Original Price: Rs {totalPrice.toFixed(0)}
      </span>
      <span style={{ fontWeight: 700, fontSize: 20 }}>
        Discount: Rs {totalPrice.toFixed(0) - totalPriceWithDiscount.toFixed(0)}
      </span>
      <span style={{ fontWeight: 700, fontSize: 20 }}>
        Total: Rs {totalPriceWithDiscount.toFixed(0)}
      </span>

      <Button type="button" disabled={itemsInCart.length === 0}>
        Checkout
      </Button>
    </div>
  );
}

export default OrderSummary;
