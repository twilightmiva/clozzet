function Category({img,title}){
    return(
        <div>
            <div className="w-[100px] h-[100px] bg-stone-200 rounded-full flex justify-center items-center" >

            <img  width={50} src={img}/>
    </div>
            <p className="text-center">{title}</p>
        </div>
        
    )
}
export default Category