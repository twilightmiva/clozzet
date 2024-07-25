import Cart from "./Cart";
import strip from "../assets/shop-images/knitted-sweater.png";
import airforce from "../assets/shop-images/unisex.png";
import dress from "../assets/shop-images/slim-banquet-dress.png";
import women from "../assets/shop-images/denim-jeans.png";
import { FaCarTunnel } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Carts({ cart, setCart }) {
  const [cartCopy, setCartCopy] = useState([]);

  useEffect(() => {
    cart && setCartCopy([...cart]);
  }, []);
  return (
    <div className="container mx-auto">
      <div className="flex justify-between">
        <div className="flex-1">
          <ul className="flex font-semibold justify-between items-center  text-center border py-3 px-2">
            <li>Product</li>
            <li className="mx-6">Quantity</li>
            <li>Price</li>
          </ul>

          {cart && cart.length === 0 ? (
            <div className="flex flex-col justify-center items-center my-5">
              <h2>Your cart is empty </h2>
<Link to="/shop"><button className="border py-4 px-[4em] cursor-pointer bg-[#45C9A1] rounded-full text-white">Continue Shopping</button></Link>
            </div>
          ) : (
            cart &&
            cart.map((item) => {
              return (
                <Cart
                  img={item.img}
                  title={item.title}
                  price={item.price}
                  cart={cart}
                  setCart={setCart}
                  cartCopy={cartCopy}
                  setCartCopy={setCartCopy}
                />
              );
            })
          )}
        </div>
        <div className="bg-stone-200 h-[250px]">
          <h1>Cart Summary</h1>
          <p>Have a promo code? Apply here</p>
          <div className="flex justify-center">
            <input
              className="outline-none py-4 px-1"
              type="number"
              placeholder="Promo Code(optional)"
            />
            <button className="border py-4 px-[4em] cursor-pointer bg-[#45C9A1] text-white">
              Apply
            </button>
          </div>
          <div className="flex justify-between">
            <p>Subtotal</p>
            <p>{`ksh.${cartCopy
              .reduce(
                (acc, curr) =>
                  acc +
                  parseInt(curr.price.replace("KSh ", "").replace(",", "")),
                0
              )
              .toLocaleString()}`}</p>
          </div>
          <div className="flex justify-between">
            <p>Delivery Fee</p>
            <p>KSh 450</p>
          </div>
          <div className="flex justify-between items-center">
            <p>Total</p>
            <p>{`ksh.${cartCopy
              .reduce(
                (acc, curr) =>
                  acc +
                  parseInt(curr.price.replace("KSh ", "").replace(",", "")),
                450
              )
              .toLocaleString()}`}</p>
          </div>
          <button className="border py-4 px-[4em]  cursor-pointer bg-[#45C9A1] text-white">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
export default Carts;
