import Collection from "./Collection";
import men from "../assets/images/mens.png";
import watch from"../assets/images/watches.png"
import designer from"../assets/images/hbags.png"
import ladies from"../assets/images/ladies.png"
function Collections(){
    return(
<div className="container mx-auto">
    <div className="grid grid-cols-2 grid-rows-1">
    <div className="bg-[#F0EFEF]">

<Collection img={men} title="Casual Collection" subtitle="Men's Collection"/>
    </div>
    <div className="bg-[#e3f9fb] py-11 ">

<Collection img={watch} title="Casual Collection" subtitle="Luxury Watches"/>
    </div>
    <div className="bg-[#fff1f1] py-11">

<Collection img={designer} title="Casual Collection" subtitle="Designer Handbags"/>
    </div>
    <div className="bg-[#fedbdd] ">

<Collection img={ladies} title="Casual Collection" subtitle="Ladies Collection"/>
    </div>


    </div>
    </div>
    )
}
export default Collections
