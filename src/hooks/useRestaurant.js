import React, { useState, useEffect } from "react";
import { getRestauerants } from "../services/getRestaurants";
const useRestaurant = () => {
  const [allRestaurants, setallRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    try {
      getRestauerants(setallRestaurants, setFilteredRestaurants);
    } catch (error) {
      console.log(error);
    }
  }, []);
  return { allRestaurants, filteredRestaurants, setFilteredRestaurants };
};

export default useRestaurant;
