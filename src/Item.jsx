import AddToCart from "./AddToCart";
export default function Item(props) {
  return (
    <>
      <h1 className="text-3xl font-bold ml-[7.5%] my-6">Desserts</h1>
      {props.Data.map((elem, i) => {
        return (
          <div key={i} className="w-[85%] mx-auto my-9">
            <picture>
              <source media="(min-width: 1024px)" srcSet={elem.image.desktop} />
              <source media="(min-width: 768px)" srcSet={elem.image.tablet} />
              <img
                src={elem.image.mobile}
                alt={elem.name}
                className="rounded-xl"
              />
            </picture>
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
    </>
  );
}
