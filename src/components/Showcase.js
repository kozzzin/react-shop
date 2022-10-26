import React from "react";
import {Route, Routes} from 'react-router-dom';
import ProductCardSmall from "./ProductCardSmall";

export default function Showcase(props) {
  const [ offers, setOffers ] = React.useState([]);
  React.useEffect(() => {
    const filteredOffers = props.offers.filter(
      (offer) => {
        if (offer.discount === true || offer.new === true) {
          return true;
        }
        return false;
      }
    );
    setOffers(filteredOffers);
  }, [props]);

  console.log(offers);

  const readyCards = offers.map(
    (card) => {
      return (
      <ProductCardSmall key = { card.id } handler = { props.handler } card = { card } />
      );
    }
  );

  return (
    <>
      <div className="showcase-container">
        <h2>Best Offers</h2>
        { readyCards }
      </div>
    </>
  );
}