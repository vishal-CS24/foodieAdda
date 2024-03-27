import React from 'react'
import styles from "./RestaurantCard.module.css"
import { FcRating } from "react-icons/fc";
import { IMAGE_CDN } from '../../constants';
const RestaurantCard = ({ resData }) => {

  return (
    <div className={styles.card}  key={resData.differentiatedUi.id} >
      <div className={styles.restaurantImage}>
        <img
          src={IMAGE_CDN+resData.cloudinaryImageId}
          alt="resImage"
          width={"100%"}
          height={"155px"}
        />
      </div>
      <div className={styles.resDetails}>
        <div className={styles.resName}>
          <div>
            <strong>{resData.name}</strong>
          </div>
        </div>
        <div className={styles.resCuisine}>
          <p>
            <i>
              <b>{resData.cuisines.join(",")}</b>
            </i>
          </p>
        </div>
        <div className={styles.resRating}>
            <FcRating size={"18px"} color="black" /> {resData.avgRating}{" "}
            {resData.sla.slaString}
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard