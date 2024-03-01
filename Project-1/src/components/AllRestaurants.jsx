
import RestaurantCard from './RestaurantCard';
import allResData from "../../init"

const AllRestaurantCards = () => {
    return (
        <div className='all-restaus'>
            {allResData.map((res,idx) => {
                // console.log(res)
                return <RestaurantCard resInfo={res.info}/>
            })}
        </div>
    )
}

export default AllRestaurantCards;