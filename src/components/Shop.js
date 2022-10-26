import React from "react";
import ProductCardSmall from './ProductCardSmall';

export default function Shop(props) {
  const readyCards = props.offers.map(
    (card) => {
      return (
       <ProductCardSmall handler = { props.handler } key = { card.id } card = { card } />
      );
    }
  );
  return (
    <>
      <h2>I'm shop</h2>
      <div className="cards-container">
        { readyCards }
      </div>
    </>
  );
}