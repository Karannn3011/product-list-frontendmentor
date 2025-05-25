import { useState } from "react";
import AddToCart from "./AddToCart";
export default function Item(props) {
  const [currentSel, setSel] = useState(true)
  
  return (
    <>
    <div className="lg:flex lg:flex-col lg:w-[70%] lg:px-9">
      <h1 className="text-3xl font-bold ml-[7.5%] my-6 lg:ml-7">Desserts</h1>
      <div className="lg:grid grid-cols-3">
      {props.Data.map((elem, i) => {
        return (
          <div  key={i} className={`cursor-pointer w-[85%] mx-auto my-9`}>
            <button className="rounded-lg border-transparent border-2 focus:border-red outline-red">
            <picture>
              <source media="(min-width: 1024px)" srcSet={elem.image.desktop} />
              <source media="(min-width: 768px)" srcSet={elem.image.tablet} />
              <img
              id={elem.name}
              
                src={elem.image.mobile}
                alt={elem.name}
                className={`rounded-xl border-2 border-transparent cursor-pointer`}
              />
            </picture>
            </button>
            <AddToCart elem={elem} cartItems={props.cartItems} setCartItems={props.setCartItems} />
            <div className=""
            >
              <h1 className="text-sm text-rose-500 font-[400]">
                {elem.category}
              </h1>
              <h1 className="text-lg font-semibold">{elem.name}</h1>
              <h1 className="text-rose-700 font-semibold">
                ${elem.price.toFixed(2)}
              </h1>
            </div>
          </div>
        );
      })}
      </div>
      </div>
    </>
  );
}
