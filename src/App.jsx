import { useState } from "react";
import Item from "./Item.jsx";
import Cart from "./Cart.jsx";
import Data from "./data.json";

function App() {
  const [cartItems, setCartItems] = useState(new Map())
  
  return (
    <>
      <Item Data={Data} cartItems={cartItems} setCartItems={setCartItems} />
      <Cart cartItems={cartItems} setCartItems={setCartItems} />
    </>
  );
}

export default App;
