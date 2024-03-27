import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaMapLocationDot } from "react-icons/fa6";
import { IMAGE_CDN } from "../../constants";

import MenuAllItems from "./MenuAllItems";
const RestaurantMenu = () => {
  const [restInfo, setRestInfo] = useState();
  const [cardElements, setCartElements] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    getRestauerants();
  }, []);

  const getRestauerants = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=31.00480&lng=75.94630&restaurantId=" + id  +"&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    const resinf=json?.data?.cards[2]?.card?.card?.info
    setRestInfo(resinf);
    const titles =
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map(
        (element) => element?.card?.card
      );
    setCartElements(titles);
  };
  return (
    <>
     {restInfo && <div className="container-fluid bg-light.bg-gradient mt-2">
        <div className="container">
          <div className="resheader p-2" style={{"boxShadow": "rgba(0, 0, 0, 0.1) 0px 10px 50px"}}>
            <h3 className="bold">{restInfo?.name}</h3>
            <p>
              {" "}
              {restInfo?.cuisines.map((element) => (
                <span key={element}>{element} </span>
              ))}
            </p>
            <p>
              {restInfo?.areaName + ","}{restInfo?.sla?.lastMileTravel} {restInfo?.sla?.lastMileTravel && " Km"}
            </p>
            <p>
              <FaMapLocationDot color="blue" size={20} />{"  "}
              {/* {restInfo?.expectationNotifiers[0]?.text}{" "} */}
            </p>
            <hr style={{ borderTop: "2px dashed" }} />
            {cardElements?.map((element,index) => <MenuAllItems key={index} element={element}/>)}
          </div>
        </div>
      </div>}
    </>
  );
};

export default RestaurantMenu;
