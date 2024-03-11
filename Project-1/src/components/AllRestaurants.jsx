
import RestaurantCard from './RestaurantCard';
import allResData from "../../init"

const AllRestaurantCards = () => {
    return (
        <div className='all-restaus'>
            {allResData.map((res,idx) => {
                return <RestaurantCard resInfo={res.info} key={idx}/>
            })}
        </div>
    )
}

export default AllRestaurantCards;