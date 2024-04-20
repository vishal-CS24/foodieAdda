import React from "react";
import { IMAGE_CDN } from "../../constants";
const MenuItems = ({ items }) => {
  return (
    <div>
      {items?.map((item,index) => (
        <>
          <div className="main-container d-flex justify-content-between my-3" key={index}>
            <div key={item?.card?.info?.name}>
              <h5>{item?.card?.info?.name}</h5>
              <p>₹{item?.card?.info?.price / 100}</p>
              <p className="fs-8">{item?.card?.info?.description}</p>
            </div>
            <div key={item?.card?.info?.imageId}>
           {item?.card?.info?.imageId && <img
              src={IMAGE_CDN + item?.card?.info?.imageId}
              alt=""
              height={"130px"}
              width={"130px"}
              className="rounded"
            />}
            </div>
          </div>
          <hr />
        </>
      ))}
    </div>
  );
};

export default MenuItems;

// {items.map((item) => {
//     <p>{item.card.info.name}</p>
//   })}
