import { useEffect, useState } from "react";
import resData from "../utils/resData.json";
import Restaurant from "./Restaurant";
import Shimmer from "./Shimmer";

const AllRestaurants = ()=>{
    let[restaurants,setRestaurants] = useState([]);
    useEffect(()=>{
        //fetching data from api but i dont have any api to call :(
        console.log("fetching data");
        let timer = setTimeout(()=>{
            setRestaurants(resData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        },2000);

        return ()=>{
            // cleanup function
            clearTimeout(timer);
        }
    },[]);

    console.log("all restaurants going to be render",restaurants);
    
    return(
        <div className=" flex justify-between gap-8 flex-wrap w-[100%] pt-4">
            {
                (!(restaurants && restaurants.length)? <Shimmer></Shimmer> : (
                    restaurants.map((res,i)=>{
                        // console.log("Restaurant loading");
                        return (<Restaurant resInfo={res} key={res.info.id}></Restaurant>);
                    })
                ))
            }

        </div>
    )
}

export default AllRestaurants;