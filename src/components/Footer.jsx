function Footer() {
  return (
    <footer className="bg-stone-100	">
      <div className="container mx-auto justify-between ">
        <div className="block">
          <h3 className="text-center text-4xl my-6">
            Subscribe & get up to 30% OFF
          </h3>
          <ul className="flex justify-center gap-4 items-center flex-col sm:flex-row">
            <li>
              <input
                className="border py-4 px-[4em] bg-white rounded-full cursor-pointer border-[#45C9A1]"
                type="email"
                placeholder="Enter your email"
              ></input>
            </li>
            <li className="border py-4 px-[4em] rounded-full cursor-pointer bg-[#45C9A1] text-white">
              <button>Subscribe</button>
            </li>
          </ul>
        </div>
        <div className="flex px-7 justify-between mt-4 items-start flex-col sm:flex-row ">
          <div>
            <img src="./src/assets/images/logo.svg" />
            <p>
              Offering a unique and
              <br /> stylish perspective on <br />
              fashion is our number
              <br />
              one priority. Confuse
              <br />
              your mirror by our
              <br />
              trendy outfits.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4 py-2">Store</h3>
            <ul className="flex flex-col gap-4">
              <li>Women's Fashion</li>
              <li>Men's Fashion</li>
              <li>Store Sale</li>
              <li>Collections</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 py-2">Help</h3>
            <ul className="flex flex-col gap-4">
              <li>Customer Support</li>
              <li>Terms& Conditions</li>
              <li>Privacy Policy</li>
              <li>Track Your Order</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 py-2">Contact Us</h3>
            <div className="flex flex-col gap-4">
              <ul className="flex gap-2">
                <li className="w-8">
                  <img src="./src/assets/images/email.png" />
                </li>
                <li>contact@clozzet.com</li>
              </ul>
              <ul className="flex gap-2">
                <li className="w-8">
                  <img src="./src/assets/images/phone.png" />
                </li>
                <li>254-700-333-333</li>
              </ul>
              <p>Follow Us</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
