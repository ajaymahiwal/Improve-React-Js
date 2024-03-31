import { IMG_URL } from "../utils/Constants";
import "../css/Restaurant.css";
import { Link } from "react-router-dom";

const Restaurant = ({resInfo})=>{
    let info = resInfo.info;
    return(
        // @4xl:w-[22%] @3xl:w-[28%] @2xl:w-[28%] @xs:w-[100%] @sm:w-[40%]
        <Link to={`/restaurants/${info.id}/menu`} className="block w-[22%] ">
        <div className="w-[100%]">
            <div className="w-[100%] relative  drop-shadow-lg  ">

            {(info?.aggregatedDiscountInfoV3?.header && info?.aggregatedDiscountInfoV3?.header!="ITEMS" && info?.aggregatedDiscountInfoV3?.subHeader) ? (
                <div className="absolute ps-2 bottom-0 w-[100%] rounded-xl bg-transparent text-black  text-xl font-bold text-custom">{info.aggregatedDiscountInfoV3?.header +" "+ info.aggregatedDiscountInfoV3?.subHeader}</div>
            ) : ""}
            
            <img src={IMG_URL+info.cloudinaryImageId} alt={info.name} className="w-[100%] h-36 object-cover rounded-xl shadow-inner"></img>
            </div>
            
            <div className="px-4 shadow-inner-xl">
                <h1 className="font-semibold text-lg ">
                    {info.name.length > 20 ? info.name.substring(0,20)+"..." : info.name}
                </h1>
                <p className="font-medium text-lg">
                    <span><i class="ri-star-fill text-yellow-500"></i> {info.avgRating}</span>
                    <span> <b className="font-8xl">.</b> {info.sla.slaString}</span>
                </p>
                <p>
                    {info.cuisines.length > 2 ? info.cuisines.splice(0,2).join(", ") + " ..." : info.cuisines.join(", ")}
                </p>
                <p className="">
                    {info.areaName}
                </p>
            </div>
        </div>
        </Link>
    );
}

export default Restaurant;