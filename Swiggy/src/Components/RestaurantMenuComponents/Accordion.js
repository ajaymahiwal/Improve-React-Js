import ItemCard from "./ItemCard";

const Accordion = ({accordion})=>{
    return(
        <div className="mt-20">
        {
            accordion.map((item,index)=>{
                return item?.card?.card?.title ? (
                        <div key={item.card.card.title}>
                            <div className="p-2 w-[100%] bg-slate-200"></div>
                            <div className="font-semibold text-xl py-4 flex justify-between items-center">
                                <p>{item.card.card.title} {item?.card?.card?.itemCards ? `(${item?.card?.card?.itemCards?.length})` : ""}</p>
                                <i class="ri-arrow-down-s-line"></i>
                            </div>
                            <div>
                                {
                                    item?.card?.card?.itemCards ? (
                                        item?.card?.card?.itemCards.map((food)=>{
                                            return <ItemCard card={food.card.info}/>
                                        })
                                    ) : ""
                                }

                                {
                                    item?.card?.card?.categories ? (
                                        item?.card?.card?.categories.map((foodContainer)=>{
                                            return (
                                                <div>
                                        <div className="font-semibold text-xl py-4 flex justify-between items-center border-b-2">
                                                <p>{foodContainer.title} {foodContainer?.itemCards ? `(${foodContainer?.itemCards.length})` : ""}
                                                </p>
                                                <i class="ri-arrow-down-s-line"></i>
                                        </div>

                                        {
                                            foodContainer?.itemCards ? (
                                                foodContainer?.itemCards.map((food)=>{
                                                    return <ItemCard card={food.card.info}/>
                                                })
                                            ) : ""
                                        }
                                        
                                        </div>
                                            )
                                    })) : ""
                                }

                                
                                {/* <h1>{item?.card?.card?.itemCards ? item?.card?.card?.itemCards[0]?.name : item?.card?.card?.categories ? "---"+item?.card?.card?.categories[0]?.itemCards[0].card.info.name : ""}</h1> */}
                                {/* // <h1>{item?.card?.card?.categories[0]?.itemCards?.name}</h1> */}
                                {
                                    console.log(item.card.card.itemCards || item.card.card.categories)
                                }
                            {/* {item.card.card.itemCards.map((food,idx)=>{
                                <h1>food.card.info.name</h1>
                            })} */}
                            {/* {item?.card?.card?.categories[0]?.itemCards[0].card.info.name} */}
                            </div>
                        </div>
                    ):null
                
            })
        }
        <div className="p-2 w-[100%] bg-slate-200"></div>
        </div>
    );
}

export default Accordion;