function Featuredcollection({img,title,price,cart,setCart}){
    return(
                <div>
        <div className="w-[300px] h-[400px] bg-stone-200  flex flex-wrap justify-center items-center relative group">

            <img width={300} src={img}/>
            <button className="bg-[#45C9A1] text-white py-4 absolute bottom-0 w-[100%] hidden group-hover:block" >Add to Cart</button>
    </div>
            <p>{title}</p>
            <p>{price}</p>
        </div>
    )
}
export default Featuredcollection