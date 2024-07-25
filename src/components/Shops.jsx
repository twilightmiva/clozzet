import Shopproduct from "./Shopproduct"
import jeans from "../assets/shop-images/ragged-jeans.png";
import brown from "../assets/images/sweatshirts.png";
import dress from "../assets/shop-images/slim-banquet-dress.png";
import denim from "../assets/images/denim.png";
import leather from "../assets/images/leather-jacket.png";
import watch from "../assets/shop-images/quartz-watch.png";
import women from "../assets/shop-images/denim-jeans.png";
import handbag from "../assets/shop-images/brown-handbag.png";
import graphic from "../assets/shop-images/graphic-tshirts.png";
import bomber from "../assets/shop-images/bomber.png";
import pallazo from "../assets/images/pallazo.png";
import shoes from "../assets/shop-images/leather-shoes.png";
import purse from "../assets/shop-images/serpenti-forever.png";
import airforce from "../assets/shop-images/unisex.png";
import cocktail from "../assets/shop-images/cocktail.png";
import top from "../assets/shop-images/Off-The-Shoulder.png";
import pants from "../assets/shop-images/Airsense-pleated.png";
import classy from "../assets/shop-images/smartwatch.png";
import heels from "../assets/shop-images/ZOOSHI-COBALT.png";
import strip from "../assets/shop-images/knitted-sweater.png";
function Shops({cart,setCart}){
    return(
        <div className="container mx-auto">
        <div className="flex  flex-wrap flex-col">
      <div className="flex  flex-wrap justify-between items-center">
        <Shopproduct cart={cart} setCart={setCart} img={jeans} title="Blue Rageed Jeans" price="KSh 2,250"/>
        <Shopproduct cart={cart} setCart={setCart} img={brown} title="Brown Leather Jacket" price="KSh 2,250"/>
        <Shopproduct cart={cart} setCart={setCart} img={dress} title="Slim Banquet Dress" price="KSh 2,250"/>
         <Shopproduct cart={cart} setCart={setCart} img={denim} title="Blue Denim Jacket" price="KSh 2,250"/>
         </div>
      <div className="flex flex-wrap justify-between items-center">
          <Shopproduct img={leather} title="Brown Leather Jacket" price="KSh 2,250"/>
         <Shopproduct img={watch} title="Quartz Men's Watch" price="KSh 2,250"/>
         <Shopproduct img={women} title="Women Denim Jeans" price="KSh 2,250"/>
         <Shopproduct img={handbag} title="Brown handbag" price="KSh 2,250"/>
         </div>
         <div className="flex flex-wrap justify-between items-center">
         <Shopproduct img={graphic} title="Unisex Graphic T-shirt" price="KSh 2,250"/>
         <Shopproduct img={bomber} title="Black Bomber Jacket" price="KSh 2,250"/>
         <Shopproduct img={pallazo} title="Pleated pallazo Pants" price="KSh 2,250"/>
         <Shopproduct img={shoes} title="Pure Leather Shoes" price="KSh 2,250"/>
         </div>
         <div className="flex flex-wrap justify-between items-center">
         <Shopproduct img={purse} title="Purple Serpenti purse" price="KSh 2,250"/>
         <Shopproduct img={airforce} title="Unisex Airforce Sneakers" price="KSh 2,250"/>
         <Shopproduct img={cocktail} title="Blue Cocktail Dress" price="KSh 2,250"/>
         <Shopproduct img={top} title="Off-Shoulder Crop Top" price="KSh 2,250"/>
         </div>
         <div className="flex flex-wrap justify-between items-center"> 
         <Shopproduct img={pants} title="Airsense Pleated Pants" price="KSh 2,250"/>
         <Shopproduct img={classy} title="Classy Smart Watch" price="KSh 2,250"/>
         <Shopproduct img={heels} title="Blue Platform Heels" price="KSh 2,250"/>
         <Shopproduct img={strip} title="Strip Knitted Sweater" price="KSh 2,250"/>
         </div>
         </div>
         </div>
    )   
}
export default Shops