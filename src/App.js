import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Shop from './components/Shop';
import Showcase from './components/Showcase';
import Cart from './components/Cart';

function App() {
  const [ offers, setOffers ] = React.useState([]);
  const [ purchases, setPurchases ] = React.useState([]);
  
  React.useEffect(() => {
    fetch('./travelData.json')
      .then(response => response.json())
      .then(json => {
        setOffers(json);
    });
  },[]);

  function clickHandler(event) {
    setPurchases((oldPurchases) => {
      const newPurchase = offers.find(el => el.id == event.target.id);
      return [
        ...oldPurchases,
        {
          order: newPurchase,
          quantity: 1
        }
      ];
    });
  };

  function purchaseButtonHandler(event) {
    const sign = event.target.getAttribute('data-sign');
    const newPurchase = purchases.find(el => el.order.id == event.target.id);

    if (sign === 'minus') {
      newPurchase.quantity -= 1;
      // if zero !!! delete element !!!
    } else if (sign === 'plus') {
      newPurchase.quantity += 1;
    }

    setPurchases((oldPurchases) => {
      const updateIndex = oldPurchases.findIndex(el => el.order.id == event.target.id);
      oldPurchases[updateIndex].quantity = newPurchase.quantity;
      return [...oldPurchases];
    });
  }
  

  return (
    <>
      <Header name="TravelShop" items={ purchases } />
      <Routes>
        <Route path = '/' end element = { <Showcase handler = { clickHandler } offers = { offers } /> } />
        <Route path = 'shop/*' element = { <Shop handler = { clickHandler } offers = { offers } /> } />
        <Route path = { `cart` } element = { 
          <Cart
            purchases = { purchases }
            purchaseButtonHandler = { purchaseButtonHandler }
          />
        } />
      </Routes>
    </>
  );
}

export default App;
