const IMG_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/";

const ItemCard = ({card})=>{
    return(
        <div className="flex justify-between p-4 border-b-2">
            <div>
                <h1 className="font-semibold text-lg">{card.name}</h1>
                <p className="font-semibold text-lg">₹{card?.price ? (card.price)/100 : "150"}</p>
                
                {
                    card?.ratings?.aggregatedRating?.rating ? (
                        <p>
                <span className="text-green-500 font-medium"><i class="ri-star-fill"></i>{card?.ratings?.aggregatedRating?.rating}</span> 
                    <span className="m-2 text-slate-500">{`(${card?.ratings?.aggregatedRating?.ratingCountV2})`}</span>
                </p>
                    ) : ""
                }
                
            </div>
            <div className="relative">
                {
                    card.imageId ? (<img src={IMG_URL+card.imageId} className="w-[8rem] h-[8rem] object-cover rounded-xl"></img>) : ""
                }
                <button className="block text-green-500 font-medium text-xl w-[6rem] rounded-lg mx-auto border border-slate-800 mt-1 bg-white">ADD</button>
            </div>
        </div>
    )
}

export default ItemCard;