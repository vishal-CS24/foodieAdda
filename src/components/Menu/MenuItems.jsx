import React, { useState } from "react";
import { IMAGE_CDN } from "../../constants";
import { BiFoodTag } from "react-icons/bi";
import { FcRating } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../../utills/Store/cartSlice"; // Assuming you have a removeItem action

const MenuItems = ({ items }) => {
  const [addedItems, setAddedItems] = useState([]);
  const dispatch = useDispatch();

  const handleAddItem = (info) => {
    dispatch(addItem(info));
    setAddedItems([...addedItems, info]); // Add the item to the addedItems array
  };

  const handleRemoveItem = (info) => {
    dispatch(removeItem(info));
    console.log(info);
    setAddedItems(addedItems.filter((item) => item !== info)); // Remove the item from the addedItems array
  };

  const isItemAdded = (info) => addedItems.includes(info);

  return (
    <div>
      {items?.map((item, index) => (
        <div className="flex justify-between" key={index}>
          <div className="w-100">
            <h5>{item?.card?.info?.name}</h5>
            <p>₹{item?.card?.info?.price / 100}</p>
            <p className="text-md">{item?.card?.info?.description}</p>
            <div
              className={`${
                item?.card?.info?.isVeg ? "text-green-500 " : "text-red-900"
              } d-flex align-items-center gap-1 font-semibold text-sm tracking-wide `}
            >
              <BiFoodTag />
              <span>{item?.card?.info?.itemAttribute?.vegClassifier}</span>
              {item?.card?.info?.ratings?.aggregatedRating.rating && (
                <>
                  <FcRating className="ms-2" />
                  <span>
                    {item?.card?.info?.ratings?.aggregatedRating.rating}
                  </span>
                </>
              )}
            </div>
          </div>
          <div
            style={{ height: "130px", width: "130px", position: "relative" }}
          >
            {item?.card?.info?.imageId && (
              <img
                src={IMAGE_CDN + item?.card?.info?.imageId}
                alt=""
                className="rounded"
                style={{ height: "120px", width: "130px" }}
              />
            )}

            <div
              className={`position-absolute left-3 ${
                isItemAdded ? "bottom-0" : "top-12"
              }`}
            >
              <button
                className={`bg-${
                  isItemAdded ? "red" : "green"
                }-400 rounded px-2 py-1 flex hover:bg-${
                  isItemAdded(item.card.info) ? "red" : "green"
                }-300 border-${
                  isItemAdded ? "red" : "green"
                }-700 text-black-800 font-bold`}
                onClick={() =>
                  isItemAdded(item.card.info)
                    ? handleRemoveItem(item.card.info)
                    : handleAddItem(item.card.info)
                }
              >
                <div>{isItemAdded(item.card.info) ? "DEL" : "ADD"}</div>
                <span className="font-extrabold d-block">+</span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuItems;
