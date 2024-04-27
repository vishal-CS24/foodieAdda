import React, { useEffect, useState } from "react";
import RestaurantCard from "../hfb/RestaurantCard";
import Shimmer from "../shimmer/Shimmer";
import styles from "../hfb/Body.module.css";
import { Link } from "react-router-dom";
import { getRestauerants } from "../../services/getRestaurants";
import { restaurantFilter } from "../../utills/helper";
import useRestaurant from "../../hooks/useRestaurant";
const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const { allRestaurants, filteredRestaurants, setFilteredRestaurants } =
    useRestaurant();
  const handleSearch = () => {
    setFilteredRestaurants(restaurantFilter(searchInput, allRestaurants));
  };
  return (
    <>
      <div className="search-container container h-50 text-center">
        <input
          type="search"
          name="search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className={`${styles.searchBar} m-3 focus:bg-red-200 focus:placeholder:text-slate-950`}
          placeholder="Enter Restaurant name here!"
        />
        <button
          type="button"
          onClick={handleSearch}
          className={`${styles.searchButton}`}
        >
          Search
        </button>
      </div>
      {filteredRestaurants?.length === 0 && <Shimmer />}
      <div className="d-flex flex-wrap container justify-content-center">
        {filteredRestaurants.map((item, index) => (
          <Link
            to={"/home/restaurant/" + item.info.id}
            style={{ textDecoration: "none" }}
          >
            {" "}
            <RestaurantCard key={index} resData={item.info} />{" "}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Body;
