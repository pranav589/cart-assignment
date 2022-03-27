import React from "react";
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
import { AiFillDelete } from "react-icons/ai";

function CartItem({ prod, saved }) {
  const {
    state: { cart },
    dispatch,
    toggleSaved,
  } = useCart();

  return (
    <ListGroup.Item key={prod.id}>
      <Row>
        <Col md={2}>
          <Image src={prod.image} alt={prod.name} fluid rounded />
        </Col>
        <Col md={2}>
          <span>{prod.name}</span>
        </Col>
        <Col md={2}>Rs {prod.price}</Col>
        <Col md={2}>
          {saved ? (
            <p>{prod.qty}</p>
          ) : (
            <Form.Control
              as="select"
              value={prod.qty}
              onChange={(e) =>
                dispatch({
                  type: "CHANGE_CART_QTY",
                  payload: {
                    id: prod.id,
                    qty: e.target.value,
                  },
                })
              }
            >
              {[0, 1, 2, 3, 4].map((x) => (
                <option key={x + 1}>{x + 1}</option>
              ))}
            </Form.Control>
          )}
        </Col>
        <Col md={2}>
          <Button
            type="button"
            variant="light"
            onClick={() =>
              dispatch({ type: "REMOVE_FROM_CART", payload: prod })
            }
          >
            <AiFillDelete fontSize="20px" />
          </Button>
        </Col>
        <Col md={2}>
          <Button onClick={() => toggleSaved(prod.id, prod.saved)}>
            {prod.saved ? "Move to cart" : "Save for later"}
          </Button>
        </Col>
      </Row>
    </ListGroup.Item>
  );
}

export default CartItem;
