import { IoCartOutline } from "react-icons/io5";
import { HiBars3 } from "react-icons/hi2";
import { Link } from "react-router-dom";

function Nav({cart}){
return(
    <nav>
        <div className="container mx-auto flex justify-between ">
        <ul className="flex items-center gap-9">
            <li ><img src="./src/assets/images/logo.svg"/></li>
           
            <Link to="/"><li className="hidden sm:block">Home</li></Link>
            <Link to="/about"><li className="hidden sm:block">About Us</li></Link>
            <Link to="/shop"><li className="hidden sm:block">Shop</li></Link>
        </ul>
        <ul className="flex relative items-center gap-4"> 
        <Link to="/cart"><li><IoCartOutline size={40}/><span className="absolute rounded-full w-[20px] h-[20px] left-[2.1em] bottom-[2.7em] text-white bg-[#45C9A1] flex justify-center items-center">{cart?cart.length:0}</span></li></Link>

            <li className="border border-black py-4 px-[4em] rounded-full cursor-pointer hidden sm:block "><button>Sign Up</button></li>
            <li className="border border-black py-4 px-[4em] rounded-full cursor-pointer hidden sm:block"><button>Log In</button></li>
            <li className="block sm:hidden"><HiBars3 size={40}/></li>
            </ul>
            </div>
    </nav>
)
}
export default Nav