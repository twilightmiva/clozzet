function SignUp(){
    return(
        <div className="flex justify-center flex-wrap gap-4 items-center">
            <div>
                <h1 className="text-4xl my-6">Create An Account</h1>
                <div className="flex flex-col justify-center gap-5">
                    <div className="flex flex-wrap justify-between gap-2">
                        <input className="border py-3 px-0.5 bg-white rounded-full cursor-pointer text-center" type="text" placeholder="First Name" />
                        <input className="border py-3 px-0.5 bg-white rounded-full cursor-pointer text-center" type="text" placeholder="Last Name"/>
                    </div>
                    <input className="border py-3 px-[6em] bg-white rounded-full cursor-pointer" type="email" placeholder="Email Address"/>
                    <input className="border py-3 px-[6em] bg-white rounded-full cursor-pointer" type="number" placeholder="Phone Number"/>
                    <input className="border py-3 px-[6em] bg-white rounded-full cursor-pointer" type="password" placeholder="Password"/>
                    <input className="border py-3 px-[6em] bg-white rounded-full cursor-pointer" type="password" placeholder="Confirm Password"/>
                    <button  className="border py-3 px-[5em] rounded-full cursor-pointer bg-[#45C9A1] text-white">Create Account</button>
                    <p className="text-center">OR</p>
                    <button className="border py-3 px-[5em] bg-white rounded-full cursor-pointer">Sign Up With Google</button>
                    <p className="text-center">Already Have An Account ? <span className="text-[#45C9A1]"></span>Log In</p>
                </div>
            </div>
            <div>
                <img src="src/assets/images/signup.png" alt="" />
            </div>
        </div>
    )
}
export default SignUp