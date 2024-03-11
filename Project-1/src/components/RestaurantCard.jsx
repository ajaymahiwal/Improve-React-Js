
import {IMG_URL} from "../../constants";

const RestaurantCard = ({resInfo}) => {
    // console.log(resInfo)
    return (
        <div className='restau-card' id={resInfo.veg ? "veg" : "non-veg"} >
            <h2>{resInfo.name}</h2>
            <p>Description of that</p>
            <img src={IMG_URL+resInfo.cloudinaryImageId} alt='restaurant image' />
            <h4>Rating: {resInfo.avgRating}</h4>
            <h4>Delivery Time: {resInfo.sla.deliveryTime}</h4>
            <h3>Veg:{resInfo.veg ? "Yes" : "NO"}</h3>
        </div>
    )
}

export default RestaurantCard;