import React, { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import {
  Button,
  Col,
  Form,
  FormControl,
  Image,
  ListGroup,
  Row,
} from "react-bootstrap";
import { useCart } from "../context/Context";
import CartItem from "../components/CartItem";
import OrderSummary from "../components/OrderSummary";

function Cart() {
  const {
    state: { cart },
  } = useCart();

  const itemsInCart = cart.filter((item) => !item.saved);
  const savedItems = cart.filter((item) => item.saved);

  return (
    <div className="cart">
      <div className="cartContainer">
        {!itemsInCart.length && (
          <h5 style={{ marginLeft: 20 }}>Cart is Empty</h5>
        )}
        {itemsInCart.length > 0 && (
          <div className="cartContain">
            <ListGroup>
              <h5>Cart ({itemsInCart.length})</h5>
              {itemsInCart.map((prod) => (
                <CartItem prod={prod} />
              ))}
            </ListGroup>
          </div>
        )}

        {savedItems.length > 0 && (
          <div className="cartContain">
            <ListGroup>
              <h5>Saved For later ({savedItems.length})</h5>
              {savedItems.map((prod) => (
                <CartItem prod={prod} saved />
              ))}
            </ListGroup>
          </div>
        )}
      </div>
      <OrderSummary itemsInCart={itemsInCart} />
    </div>
  );
}

export default Cart;
