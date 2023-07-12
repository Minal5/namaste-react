import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  let [listOfRestaurants, setListOfRestaurant] = useState(resList);


    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" 
                onClick={()=>{
                  //  Filter logic here
                  const filteredList = listOfRestaurants.filter((res)=>(res.data.avgRating > 4.2));
                  setListOfRestaurant(filteredList);
                }}>
                  Top Rated Reataurants</button>
            </div>
            <div className="res-container">
              {
                listOfRestaurants.map((restaurant) => (
                <RestaurantCard key ={restaurant.data.id} resData = {restaurant}/>
                ))
              }
                
                
            </div>
        </div>
    )
}

export default Body;