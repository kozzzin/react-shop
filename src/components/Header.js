import React from "react";
import { Link, NavLink, useLocation, Routes, Route  } from "react-router-dom";
import CartLink from './CartLink';


export default function Header(props) {
  return (
    <>
      <div className="header">
        <h1><Link to='/'>{ props.name }</Link></h1>
        <ul>
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/shop">Shop</NavLink></li>
          <li><CartLink items={ props.items } /></li>
        </ul>
      </div>
    </>
  );
}