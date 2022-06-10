import Header from "./Components/Layout/Header";
import React, { useState } from "react";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [isCartShown, setIsCartShown] = useState(false);

  function showCartHandler() {
    setIsCartShown(true);
  }

  function hideCartHandler() {
    setIsCartShown(false);
  }
  return (
    <CartProvider>
      {isCartShown && <Cart onHideCartButton={hideCartHandler}></Cart>}
      <Header onShowCartButton={showCartHandler}></Header>
      <Meals></Meals>
    </CartProvider>
  );
}

export default App;
