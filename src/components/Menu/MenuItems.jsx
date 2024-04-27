import React from "react";
import { IMAGE_CDN } from "../../constants";
import { BiFoodTag } from "react-icons/bi";
import { FcRating } from "react-icons/fc";
const MenuItems = ({ items }) => {
  return (
    <div>
      {items?.map((item, index) => (
        <>
          <div className="flex justify-between" key={index}>
            <div key={item?.card?.info?.name} className="w-100">
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
              key={item?.card?.info?.imageId}
              style={{ height: "130px", width: "130px", position: "relative" }}
            >
              {item?.card?.info?.imageId && (
                <>
                  <img
                    src={IMAGE_CDN + item?.card?.info?.imageId}
                    alt=""
                    className="rounded"
                    style={{ height: "120px", width: "130px" }}
                  />
                </>
              )}

              <div
                className={`position-absolute md:left-[27px] sm:left-4 left-3 ${
                  item?.card?.info?.imageId ? "bottom-0" : "top-12"
                } `}
              >
                <button
                  className="bg-red-400 rounded px-2 py-1 flex hover:bg-red-300 bottom-2 border-red-700 text-black-800 font-bold"
                  onClick={() => console.log(item.card.info)}
                >
                  <div>ADD</div>
                  <span className="font-extrabold d-block ">+</span>
                </button>
              </div>
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
