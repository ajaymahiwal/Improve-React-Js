
import RestaurantCard from './RestaurantCard';
import allResData from "../../init"
import {useState,useEffect} from 'react';

const AllRestaurantCards = () => {

    useEffect(()=>{
        console.log("i am useeffect and i run my callback after the component render.");

        // fetchData();
    },[])
    
    // async function fetchData(){
    //     const raw = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4594965&lng=77.0266383&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",{
    //         mode: "cors",
    //         headers: {
    //             "Access-Control-Allow-Origin":"*",
    //             "Content-Type": "application/json",
    //             'Content-Type': 'application/x-www-form-urlencoded',
    //           },
    //     })
    //     console.log(raw);
    //     const data = await raw.json();
    //     // console.log(data);
    // }

    return (
        <div className='all-restaus'>
            {
                allResData.map((res,idx) => {
                    return (<RestaurantCard resInfo={res.info} key={idx}/>);
                })
            }
        </div>
    )
}

export default AllRestaurantCards;