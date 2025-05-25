import { useState } from "react";
import Confirmation from "./Confirmation.jsx"

export default function Cart(props) {
    const [confirm, confirmShown] = useState(false);
  let expression;
  let otherExp;
  const total = Array.from(props.cartItems.values()).reduce((sum, item) => {
  return sum + item.price * item.quantity;
}, 0);
  if (props.cartItems.size == 0) {
    expression = (
      <>
        <img
          src="./assets/images/illustration-empty-cart.svg"
          alt="cart empty"
          className="w-2/3 mx-auto my-8"
        />
        <p className="text-center text-sm font-semibold text-rose-500">
          Your added items will appear here.
        </p>
      </>
    );
  } else {

    expression = <>
      {Array.from(props.cartItems.entries()).map(([key, item]) => (

        <div
          key={key}
          className="flex flex-row justify-between items-center mb-2 py-4 border-b-[1px] border-b-rose-300/50"
        >
        <img className="w-1/5 rounded-lg" src={item.image.thumbnail} alt="thumb" />
          <div className="flex flex-col">
            <div>
            <h3 className="font-bold text-rose-500">{item.name}</h3>
            </div>
            <div className="flex flex-row gap-x-3 mt-1">
            <p className="text-red font-semibold">{item.quantity}x</p>
            <p className="text-rose-400 font-semibold">@ ${item.price.toFixed(2)}</p>
            <p  className="text-rose-500 font-bold">${(item.quantity * item.price).toFixed(2)}</p>
            </div>
          </div>
          <div>
            <img 

            onClick={() => {
                const newMap = new Map(props.cartItems)
                newMap.delete(key)
                props.setCartItems(newMap);
            }}
            
            src="./assets/images/icon-remove-item.svg" alt="remove item" className="cursor-pointer border-[1px] border-gray-300 p-2 rounded-full" />
          </div>
        </div>
        
      ))}
      <div className="flex flex-row mt-3 justify-between items-center">
        <h1 className="text-rose-500 font-semibold">Total</h1>
        <p className="text-3xl font-semibold">${total.toFixed(2)}</p>
      </div>
      <div className=" mx-auto rounded-lg flex flex-row bg-rose-100 w-[95%] justify-between items-center px-3 py-3 text-sm mt-4">
        <img src="./assets/images/icon-carbon-neutral.svg" />
        <p>This is a <span className="font-semibold">carbon-neutral</span> delivery.</p>
      </div>
      <div className="mx-auto w-[95%]">
        <button onClick={() => {
            confirmShown(true)
        }} type="button" className="cursor-pointer bg-red text-white p-4 w-full rounded-full mt-5 font-semibold">Confirm Order</button>
      </div>

      
    </>;

    otherExp = <>
    <div className="overflow-y-scroll max-h-70">
    {Array.from(props.cartItems.entries()).map(([key, item]) => (
      
        <div
          key={key}
          className="flex flex-row justify-between items-center mb-2 py-4 border-b-[1px] border-b-rose-300/50"
        >
        <img className="w-1/5 rounded-lg lg:w-[80px]" src={item.image.thumbnail} alt="thumb" />
          <div className="flex flex-col lg:gap-x-2">
            <div>
            <h3 className="font-bold text-rose-500">{item.name}</h3>
            </div>
            <div className="flex flex-row gap-x-3 mt-1">
            <p className="text-red font-semibold">{item.quantity}x</p>
            <p className="text-rose-400 font-semibold">@ ${item.price.toFixed(2)}</p>
            
            </div>
          </div>
          <div>
            <p  className="text-rose-500 font-bold">${(item.quantity * item.price).toFixed(2)}</p>
          </div>
        </div>
      
      ))}
      </div>
      <div className="flex flex-row mt-3 justify-between items-center">
        <h1 className="text-rose-500 font-semibold">Order Total</h1>
        <p className="text-3xl font-semibold">${total.toFixed(2)}</p>
      </div>
      
      <div className="mx-auto w-[95%]">
        <button onClick={() => {
            window.location.reload();
        }} type="button" className="cursor-pointer bg-red text-white p-4 w-full rounded-full mt-5 font-semibold">Start New Order</button>
      </div>

    </>
  }
  return (
    <>
    <div className="lg:w-[40%] lg:my-10">
      <div className="w-[85%] mx-auto my-3 bg-white rounded-xl p-4">
        <h1 className="text-2xl font-bold text-rose-700">
          Your Cart (<span>{props.cartItems.size}</span>)
        </h1>
        <div className="flex flex-col">{expression}</div>
      </div>
     <Confirmation confirm={confirm} expression={otherExp}/>
    </div>
    </>
    
  );
}
