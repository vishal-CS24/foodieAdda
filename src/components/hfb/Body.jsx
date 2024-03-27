import React, { useEffect, useState } from "react";
import RestaurantCard from "../RestaurantCard";
import Shimmer from "../shimmer/Shimmer";
import { restaurants } from "../../Data/Data";
import styles from "./Body.module.css"
import { Link } from "react-router-dom";
const restaurantFilter = (searchText, restaurantData) => {
  return restaurantData?.filter((item) => {
    return item?.info?.name.toLowerCase().includes(searchText.toLowerCase());
  });
};
const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const [allRestaurants,setallRestaurants]=useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const handleSearch = () => {
    setFilteredRestaurants(restaurantFilter(searchInput, allRestaurants));
  };

  useEffect(()=>{
    try {
      getRestauerants()
    } catch (error) {
      console.log(error);
    }
  },[])

  async function getRestauerants(){
  let url="https://www.swiggy.com/dapi/restaurants/list/v5?lat=31.00480&lng=75.94630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
   const data =  await fetch(url)
   const json =await  data.json();
   const res = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
   setallRestaurants(res)
   setFilteredRestaurants(res)
  }
  return (
    <>
      <div className="search-container container h-50 text-center">
        <input
          type="search"
          name="search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className={`${styles.searchBar} m-3`}
          placeholder="Enter Restaurant name here!"
        />
        <button type="button" onClick={handleSearch} className={`${styles.searchButton}`} >
          Search
        </button>
      </div>
       { filteredRestaurants?.length ===0  &&<Shimmer/>}
      <div className="d-flex flex-wrap container justify-content-center">
        {filteredRestaurants.map((item, index) => (
         <Link to={"/restaurant/"+ item.info.id}  style={{ textDecoration: 'none' }}> <RestaurantCard key={index} resData={item.info} /> </Link> 
        ))}
      </div>
    </>
  );
};

export default Body;