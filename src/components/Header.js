import React from "react";
import { Badge, Container, Nav, Navbar } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/Context";

function Header() {
  const navigate = useNavigate();
  const {
    state: { cart },
  } = useCart();
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/">FLIPKART</Link>
          </Navbar.Brand>
          <Nav style={{ cursor: "pointer" }} onClick={() => navigate("/cart")}>
            <FaShoppingCart color="white" />
            <Badge>{cart.length}</Badge>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
