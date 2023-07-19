import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { ALL_RESTAURANTS } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  //  Local State Variable - Super Powerful Variable
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurant,setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  //  Whenever state variables update, react triggers a reconciliation cycle (re-renders the component)  
  console.log("Body Rendered");

  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData = async ()=>{
    const data = await fetch(ALL_RESTAURANTS);
    const json = await data.json();
    console.log(json);
    //  Optional Chaining
    setListOfRestaurant(json?.data?.cards[2]?.data?.data?.cards)
    setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards)
  }

    return listOfRestaurants.length === 0 ? <Shimmer/> : (
        <div className="body">
          <div className="filter">
            <div className="search">
              <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                setSearchText(e.target.value);
              }} />
              <button onClick={()=>{
                //  Filter the restaurant cards and update the UI
                //  searchText
                 const filteredRestaurant = listOfRestaurants.filter(
                  (res)=>res.data.name.toLowerCase().includes(searchText.toLowerCase()));

                  setFilteredRestaurant(filteredRestaurant);
              }}>Search</button>
            </div>
              <button className="filter-btn" 
                onClick={()=>{
                  //  Filter logic here
                  const filteredList = listOfRestaurants.filter((res)=>(res.data.avgRating > 4.2));
                  setListOfRestaurant(filteredList);
                }}>Top Rated Reataurants
              </button>
          </div>
          <div className="res-container">
              {
                filteredRestaurant.map((restaurant) => (
                <Link key ={restaurant.data.id}
                  to={"/restaurant/"+restaurant.data.id }
                ><RestaurantCard  resData = {restaurant}/></Link>
                ))
              }
                
                
          </div>
        </div>
    )
}

export default Body;