function Collection({img,title,subtitle}){
return(
    <div className="flex  flex-wrap items-end justify-between">
    <div className="w-[300px] h-[400px]" >

    <img  width={300} src={img}/>
</div>
<div>

    <p>{title}</p>
    <p>{subtitle}</p>
</div>
</div>
)
}
export default Collection 