

function Shopproduct({ img, title, price, cart, setCart }) {
  const handleAddToCart = (e, product) => {
    if (e.target.textContent.toLowerCase() === "add to cart") {
      setCart((prev) => [...prev, product]);
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      const cartDuplicate = [...cart];

      const itemIndex=cartDuplicate.indexOf(product)
      cartDuplicate.splice(itemIndex,1)
      setCart(cartDuplicate)

      cart.filter((item) => { 
        if (item.title !== product.title) cartCopy.push(item);
      });
    }

  };
  return (
    <div>
      <div className="w-[300px] h-[400px] bg-stone-200  flex  flex-wrap justify-center items-center relative group">
        <img width={300} height={300} src={img} />
        <button
          onClick={(e) => handleAddToCart(e, { img, title, price })}
          className="bg-[#45C9A1] text-white py-4 absolute bottom-0 w-[100%] hidden group-hover:block on"
        >
          {cart && cart.filter((item) => item.title === title).length === 1
            ? "Remove from Cart"
            : "Add to Cart"}
        </button>
      </div>
      <p>{title}</p>
      <p className="text-[#45C9A1]">{price}</p>
     
    </div>
  );
}
export default Shopproduct;
