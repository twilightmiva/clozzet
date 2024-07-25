import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import {useState} from "react"
function LogIn(){
    const[showPassword,setShowPassword]=useState(true)
function handleShowPassword(){
    setShowPassword(prev=>!prev)
  
}
    return(
<section className="container mx-auto">
    <div className="flex justify-center flex-wrap gap-4 items-center">
<img src="src/assets/images/login.png"/>
<div>
    <h1 className="text-4xl my-6">Login to your Account</h1>
    <div className="flex flex-wrap flex-col justify-center gap-5">
        <input className="border py-3 px-[1em] bg-white rounded-full outline-none" type="email" placeholder="Email Address"/>
        <div className="border flex  items-center bg-white rounded-full cursor-pointer pr-2">
        <input className="flex-1 py-3 px-[1em] bg-transparent outline-none " type= {showPassword?"password":"text"} placeholder="Password"/>

        <div onClick={handleShowPassword }>
        {showPassword?<FaEyeSlash/>:<FaEye/>}
       
        </div>
        </div>

        <div className="flex justify-center items-center gap-[5em]">
            <div className="flex justify-center items-center gap-3">

            <input type="checkbox" />
            <p>Remember Me</p>
            </div>
            <p className="text-[#45C9A1]">Forgot Password?</p>
        </div>
        <button className="border py-3 px-[5em] rounded-full cursor-pointer bg-[#45C9A1] text-white">Sign In</button>
        <p className="text-center">or</p>
        <button className="border py-3 px-[5em] bg-white rounded-full cursor-pointer">Log In With Google</button>
        <p className="text-center">Dont Have An Account Yet? <span className="text-[#45C9A1]">Sign Up Free</span></p>
    </div>
</div>
    </div>
</section>
    )
}
export default LogIn