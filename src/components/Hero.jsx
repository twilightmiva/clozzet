function Hero(){
    return(
<section className="container mx-auto ">
    <div className="flex justify-between">
    <div className="">
    <h1 className="font-bold text-5xl">Choose the look<br/>that <span className="text-[#45C9A1]">suits</span> you best</h1>
    <p>Every day is a fashion show & the world is your runway.<br/>
    Clozzet will elevate your wardrobe with the best collections.<br/>
    Be exclusive, Be Devine, Be yourself. Explore outfits that will<br/>
    make you comfortably beautiful.True style never dies.</p>
<ul className="flex my-4 gap-2">
    <li className="border py-2 px-[2em] rounded-full cursor-pointer bg-[#45C9A1] text-white"><button>Shop Now</button></li>
    <li ><button className="border py-2 px-[2em] bg-white rounded-full cursor-pointer text-[#45C9A1]">About Us</button></li>

</ul>
<input type="text" placeholder="Search" className="border py-2 px-[3em] bg-white rounded-full cursor-pointer"></input>
</div>
<div>
    <div>
        <img src="./src/assets/images/hero-background.png" className="absolute top-0 right-1 z-[-1]"/>
<img src="./src/assets/images/hero-image.png"/>
</div>
</div>
</div>
</section>


    )
}
export default Hero