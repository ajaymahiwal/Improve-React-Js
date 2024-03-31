

const RestaurantShimmer = ()=>{
    return(
        <div className="w-[22%]">
        <div className="w-[100%] relative">

        {/* {(info?.aggregatedDiscountInfoV3?.header && info?.aggregatedDiscountInfoV3?.header!="ITEMS" && info?.aggregatedDiscountInfoV3?.subHeader) ? (
            <div className="absolute ps-2 bottom-0 w-[100%] rounded-xl bg-transparent text-black  text-xl font-bold text-custom">{info.aggregatedDiscountInfoV3?.header +" "+ info.aggregatedDiscountInfoV3?.subHeader}</div>
        ) : ""} */}
        
        <div  className="w-[100%] h-36 object-cover rounded-xl shadow-inner  bg-slate-300"></div>
        </div>
        
        <div className="px-4 shadow-inner-xl w-[100%]">
            <h1 className="font-semibold text-lg w-[100%] bg-slate-300 p-2 mt-1"></h1>
            <p className="font-medium text-lg w-[100%]">
                <span className="inline-block bg-slate-300 p-2 mt-1 "></span>
                <span className="inline-block bg-slate-300 p-2 mt-1 ms-1 w-20"></span>
            </p>
            <p className="w-[100%]  bg-slate-300 p-2 mt-1"></p>
            <p className="w-[100%]  bg-slate-300 p-2 mt-1"></p>
        </div>
    </div>
    )
}

export default RestaurantShimmer;