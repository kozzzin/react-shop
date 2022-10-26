import React from "react";

export default function ProductCardSmall(props) {
  return (
    <>
    <div className="card">
      <div className="img-product-container">
        { props.card.discount && <div className="discount">Hot</div> }
        { props.card.new && <div className="new">New</div>  }
        <img src={ props.card.coverPhoto } alt={ props.card.city } />
      </div>
      <h3>{ props.card.country }: { props.card.city }</h3>
      <p>{ props.card.description }</p>
      <ul className="product-info">
        <li>
          <strong>Price:</strong>
          &nbsp;{ props.card.price }{ props.card.currency }
        </li>
        <li>
          <strong>Days:</strong>
          &nbsp;{ props.card.days }
        </li>
        <li>
          <button id = {props.card.id} onClick={ props.handler }>Buy it now</button>
        </li>
      </ul>
    </div>
  </>
  );
}