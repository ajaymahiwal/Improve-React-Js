import "../../css/Restaurant.css";
const OFFER_IMG = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/";

const OfferCard = ({cards,title})=>{
    return(
        <div className="mt-8">
            <h1 className="text-xl font-bold my-3">{title}</h1>
            <div className="w-[100%] flex gap-4 mt-5 pb-4 offers-card">
                {cards.map((card,index)=>{
                    return(
                        <div className="border rounded-2xl flex gap-4 items-center p-3 w-[40%]" key={card.info.offerIds}>
                    <img src={OFFER_IMG + card?.info?.offerLogo} alt="" className="w-12 h-12"></img>
                    <div>
                        <p className="w-52 font-medium">{card?.info?.header}</p>
                        <p className="text-slate-400">{card?.info?.couponCode}</p>
                    </div>
                </div>
                    )
                })}
        </div>
        </div>
    )
}

export default OfferCard;