import {useParams} from 'react-router-dom';
import AllRestaurantsMenu from '../utils/MENU_DATA.json'
import { useEffect, useState } from 'react';
import ResTopInfo from './RestaurantMenuComponents/ResTopInfo';
import OfferCard from './RestaurantMenuComponents/OfferCard';
import Shimmer from './Shimmer';
import Accordion from './RestaurantMenuComponents/Accordion';




const RestaurantMenuPage = ()=>{
    let {id} = useParams();
    let[resInfo,setResInfo] = useState(null);
    let[offers,setOffers] = useState([""]);
    let[accordion,setAccordion] = useState(null);
    useEffect(()=>{
        console.log("fetching data");
        let timer = setTimeout(()=>{
            setResInfo(AllRestaurantsMenu[id].data.cards[2].card.card.info);
            setOffers(AllRestaurantsMenu[id].data.cards[3].card.card.gridElements.infoWithStyle.offers);
            setAccordion(AllRestaurantsMenu[id].data.cards[4].groupedCard.cardGroupMap.REGULAR.cards);
        },2500);

        return ()=>{
            clearTimeout(timer);
        }
    },[]);

    if(!resInfo || !offers || !accordion){
        return <Shimmer/>
    }
    return(
       <main className='mt-4 border p-4 border-red-600 w-[65%] mx-auto'>
            <ResTopInfo res={resInfo}/>
            <OfferCard cards={offers} title={"Deals for you"}/>
            <Accordion accordion={accordion}/>
       </main>
    )
}


export default RestaurantMenuPage;