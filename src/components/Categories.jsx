import Category from "./Category"
import jacket from "../assets/images/jacket.png";
import handbag from "../assets/images/handbag.png";
import shirts from "../assets/images/tshirt.png";
import dresses from "../assets/images/dress.png";
import jeans from "../assets/images/jeans.png";
import shoes from "../assets/images/shoe.png";
import sweater from "../assets/images/sweater.png";

function Categories(){
    return(
        <div className="container mx-auto">
            <h2 className="text-center my-[3rem] font-medium text-2xl">Top Categories</h2>
<div className="flex flex-wrap justify-between">
<Category img={jacket} title="Jacket"/>
<Category img={handbag} title="Handbag"/>
<Category img={shirts} title="Shirts"/>
<Category img={dresses} title="Dresses"/>
<Category img={jeans} title="Jeans"/>
<Category img={shoes} title="Shoes"/>
<Category img={sweater} title="Sweater"/>
</div>

</div>

    )
    
}
export default Categories