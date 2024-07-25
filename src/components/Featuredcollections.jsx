import Featuredcollection from "./Featuredcollection";
import jacket from "../assets/images/leather-jacket.png";
import sweatshirts from "../assets/images/sweatshirts.png";
import pallazo from "../assets/images/pallazo.png";
import denim from "../assets/images/denim.png";
function Featuredcollections({cart,setCart}){
    return(
<div className="container mx-auto">
    <h2 className="text-center my-[4rem] font-medium text-2xl">Featured Collection</h2>
    <div className="flex flex-wrap justify-between">
        <Featuredcollection cart={cart} setCart={setCart} img={jacket} title="Brown Leather Jacket" price="KSh 2,250"/>
        <Featuredcollection cart={cart} setCart={setCart} img={sweatshirts} title="Round-neck Sweatshirts" price="KSh 2,000"/>  
        <Featuredcollection cart={cart} setCart={setCart} img={pallazo} title="Pleated Pallazo Trousers" price="KSh 1,800"/>  
        <Featuredcollection cart={cart} setCart={setCart} img={denim} title="M-22 Denim Jacket" price="KSh 1,250"/>
    </div>
</div>
    )
}
export default Featuredcollections