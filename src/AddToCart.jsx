export default function AddToCart(props) {
  function addItem(obj) {
    const key = obj.name;
    const newMap = new Map(props.cartItems);
    const existing = newMap.get(key);
    

    if (existing) {
      newMap.set(key, {
        ...existing,
        quantity: existing.quantity + 1,
      });
    } else {
      newMap.set(key, {
        ...obj,
        quantity: 1,
      });
    }
    props.setCartItems(newMap);
  }
  let expression;

  const cartItem = props.cartItems.get(props.elem.name);
  const quantity = cartItem?.quantity || 0;

  if (quantity == 0) {
    expression = (
      <>
        <div
        onFocus={() => setSel(true)}
          onClick={() => addItem(props.elem)}
          className="flex flex-row bg-white px-4 py-3 border-1 border-red rounded-full justify-between items-center gap-x-3"
        >
          <img
            src="./assets/images/icon-add-to-cart.svg"
            alt="add to cart"
          />
          <span className="text-sm font-semibold">Add to cart</span>
        </div>
      </>
    );
  } else {
    expression = (
      <>
        <div className="flex flex-row bg-red px-4 py-3 border-1 border-red rounded-full justify-between items-center gap-x-8">
          <img
            onClick={() => {
              const newMap = new Map(props.cartItems);
              const existing = newMap.get(props.elem.name);

              if (existing.quantity > 1) {
                newMap.set(props.elem.name, {
                  ...existing,
                  quantity: existing.quantity - 1,
                });
              } else {
                newMap.delete(props.elem.name);
              }

              props.setCartItems(newMap);
            }}
            className="cursor-pointer border-1 py-2 px-1 rounded-full border-white"
            src="./assets/images/icon-decrement-quantity.svg"
            alt="minus"
          />
          <p className="text-white font-bold">{quantity}</p>
          <img
            onClick={() => addItem(props.elem)}
            className="cursor-pointer   border-1  py-1 px-1 rounded-full border-white"
            src="./assets/images/icon-increment-quantity.svg"
            alt="plus"
          />
        </div>
      </>
    );
  }
  return (
    <>
      <div className="relative -translate-y-1/2 flex justify-center items-center -mb-2">
        <div>{expression}</div>
      </div>
    </>
  );
}
