import { useState,useEffect } from "react";
import { MENU_INFO } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = ()=>{

    const [resInfo, setResInfo] = useState(null);

    const {resId} = useParams();

    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async ()=>{
        const data = await fetch(MENU_INFO + resId); 
        const json = await data.json();
        setResInfo(json.data);
    };

    if(resInfo === null) return <Shimmer/>

    const {name ,avgRating,costForTwoMessage, cuisines} = resInfo?.cards[0]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(itemCards);

    return(
        <div className="menu">
            <h1>{name}</h1>
            <h2>{cuisines.join(", ")}</h2>
            <h3>Average ratings {avgRating} stars</h3>
            <h3>{costForTwoMessage}</h3>
            <ul>{itemCards.map(item => <li key={item.card?.info?.id}>
                {item.card?.info?.name} - Rs.{item.card?.info?.price/100 || item.card?.info?.defaultPrice/100}</li>)}
            </ul>

        </div>
    );
}

export default RestaurantMenu;