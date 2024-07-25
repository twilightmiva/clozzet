import { useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
function Cart({
  img,
  title,
  size,
  price,
  cart,
  cartCopy,
  setCart,
  setCartCopy,
}) {
  const handleDelete = (product) => {
    const items = cart.filter((item) => item.title !== title);
    setCart(items);
    localStorage.setItem("cart", JSON.stringify(items));
  };

  function handleCartAction(action, product) {
    if (action === "increment") {
      setCartCopy((prev) => [...prev, product]);
    } else if (action === "decrement") {
      const cartCopyItems = [...cartCopy];
      const cartItemIndex = cartCopyItems.indexOf(product);
      cartCopyItems.splice(cartItemIndex, 1);
      setCartCopy(cartCopyItems);
    }
  }
  return (
    <div>
      <div className="flex flex-wrap justify-between border ">
        <div className="flex items-center ">
          <div className=" h-[150px] flex  items-center">
            <img width={70} src={img} />
          </div>
          <div className="w-[7em]">
            <p className="font-semibold">{title}</p>
            <p>{size}</p>
            <RiDeleteBin6Line
              onClick={handleDelete}
              size={20}
              className="text-red-700 cursor-pointer"
            />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button
            disabled={
              cartCopy.filter((item) => item.title === title).length === 1
            }
            onClick={() => handleCartAction("decrement", { img, title, price })}
            className="border py-2 px-2"
          >
            -
          </button>
          <p className="border py-2 px-2">
            {cartCopy.filter((item) => item.title === title).length}
          </p>
          <button
            onClick={() => handleCartAction("increment", { img, title, price })}
            className="border py-2 px-2"
          >
            +
          </button>
        </div>
        <p className="flex items-center font-semibold">{`ksh.${cartCopy
          .filter((item) => item.title === title)
          .reduce(
            (acc, curr) =>
              acc + parseInt(curr.price.replace("KSh ", "").replace(",", "")),
            0
          )
          .toLocaleString()}`}</p>
      </div>
    </div>
  );
}
export default Cart;
