import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaMapLocationDot } from "react-icons/fa6";
import { IMAGE_CDN } from "../../constants";
import { getRestauerantsInfo } from "../../services/getRestaurants";
import MenuAllItems from "./MenuAllItems";
import MenuShimmer from "../shimmer/MenuShimmer";
const RestaurantMenu = () => {
  const [restInfo, setRestInfo] = useState();
  const [cardElements, setCartElements] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    try {
      getRestauerantsInfo(setRestInfo, setCartElements, id);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      {!restInfo ? (
        <MenuShimmer />
      ) : (
        <div className="container-fluid bg-light.bg-gradient mt-2">
          <div className="container w-60">
            <div
              className="resheader p-2"
              style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 50px" }}
            >
              <h3 className="bold">{restInfo?.name}</h3>
              <p>
                {" "}
                {restInfo?.cuisines.map((element) => (
                  <span key={element}>{element} </span>
                ))}
              </p>
              <p>
                {restInfo?.areaName + ","}
                {restInfo?.sla?.lastMileTravel}{" "}
                {restInfo?.sla?.lastMileTravel && " Km"}
              </p>
              <p>
                <FaMapLocationDot color="blue" size={20} />
                {"  "}
                {restInfo?.expectationNotifiers[0]?.text}{" "}
              </p>
              <hr style={{ borderTop: "2px dashed" }} />
              <h5 className="text-center">★彡[MENU]彡★</h5>
              {cardElements?.map((element, index) => (
                <MenuAllItems key={index} element={element} />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RestaurantMenu;
