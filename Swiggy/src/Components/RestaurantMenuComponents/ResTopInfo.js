

const ResTopInfo = ({res})=>{
    return(
        <div className="resInfo">
            <h1 className="py-6 text-2xl font-bold">{res?.name}</h1>
            <div className=" rounded-3xl bg-gradient-to-t from-gray-300 to-white p-4">
                <div className="bg-white border rounded-xl p-4">
                    <p className="text-lg font-medium">
                        <i className="ri-star-fill text-yellow-400 text-lg"></i>
                        <span>{res?.avgRatingString} ({res?.totalRatingsString})</span>
                        <b className="mx-2 text-xl">.</b>
                        <span>{res?.costForTwoMessage}</span>
                    </p>
                    <p className="underline text-orange-500 font-medium">
                        {res?.cuisines.join(", ")}
                    </p>
                    <p className="font-medium ">Outlet <span className="text-slate-400">{res?.areaName}</span></p>
                    <p className="border-t mt-3 py-2 font-medium text-slate-500"><i className="ri-error-warning-fill text-orange-500 text-lg mx-1"></i>Far (4.5 kms) | Additional delivery fee will apply</p>
                </div>
            </div>
        </div>
    )
}

export default ResTopInfo;