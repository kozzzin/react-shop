import React from "react";
import ProductCardSmall from "./ProductCardSmall";

export default function Cart(props) {

  const [ cartTotal, setCartTotal ] = React.useState([]);

  function formHandler(event) {
    event.preventDefault();
  }


  //// for shopping cart it should be different element !!!
  //// without buttons
  //// without additional text
  //// fix stick basket icon
  //// total of basket
  //// delete item if we have zero or less quantity
  //// add on change for input field !
  //// avoid addition of same order adding, add quantity instead
  //// add marking, that this offer is already in cart
  


  const readyPurchases = props.purchases.map(
    (purchase) => {
      return (
        <>
        <div className="purchase-card">
          <ProductCardSmall
            handler = { props.handler }
            key = { purchase.order.id }
            card = { purchase.order } />
          <div className="purchase-management">
            <form onSubmit={ formHandler }>
              <button 
                id = { purchase.order.id }
                data-sign="minus"
                onClick = { props.purchaseButtonHandler }
                className="minus">
                -
              </button>
              <input type="text" value = { purchase.quantity } className="quantity">
                
              </input>
              <button
                id = { purchase.order.id }
                data-sign="plus"
                onClick = { props.purchaseButtonHandler }
                className="+">
                +
              </button>
              <span><strong>Total:</strong>&nbsp;
              { purchase.quantity * purchase.order.price }
              { purchase.order.currency}</span>
            </form>
            
          </div>
        </div>
        </>
      );
    }
  );
  return (
    <>
      <div className="cart-container">
        <h2>I'm cart</h2>
        { readyPurchases }
        <div class='cart-total'>
          <strong>Cart total:</strong>
          {/* &nbsp;{ cartTotal.reduce((acc,cur) => { return acc + cur}, 0) } */}
        </div>
      </div>
    </>
  );
}