import React from "react";
import { NavLink } from "react-router-dom";

export default function CartLink(props) {
  return <>
    <NavLink to={ `cart` }><img className="cart-link" src="./imgs/cart.svg" alt="cart" />Shopping cart</NavLink>
    { (props.items && props.items.length > 0) && <span className="cart-items-count"> ({ props.items.length })</span> }
  </>;
}