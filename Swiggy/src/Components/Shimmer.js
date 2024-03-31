import RestaurantShimmer from "./RestaurantShimmer";

const Shimmer = ()=>{
    return (
        <>
        {/* <h1 className="text-5xl">Loading......</h1> */}
        {/*             <div className="absolute w-[100%] h-36 rounded-xl bg-slate-200"></div> */}
            <div className="all flex justify-between gap-8 flex-wrap w-[100%] pt-4">
                <RestaurantShimmer/>
                <RestaurantShimmer/>
                <RestaurantShimmer/>
                <RestaurantShimmer/>

                <RestaurantShimmer/>
                <RestaurantShimmer/>
                <RestaurantShimmer/>
                <RestaurantShimmer/>

                <RestaurantShimmer/>
                <RestaurantShimmer/>
                <RestaurantShimmer/>
                <RestaurantShimmer/>
            </div>
        </>
    );
}

export default Shimmer;