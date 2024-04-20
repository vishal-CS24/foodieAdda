import { FETCH_MENU_URL, FETCH_RESTAURANT_MENU } from "../constants";
export async function getRestauerants(
  setallRestaurants,
  setFilteredRestaurants
) {
  const data = await fetch(FETCH_RESTAURANT_MENU);
  const json = await data.json();
  const res =
    json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
  setallRestaurants(res);
  setFilteredRestaurants(res);
}

export const getRestauerantsInfo = async (setRestInfo, setCartElements, id) => {
  const data = await fetch(FETCH_MENU_URL + id);
  const json = await data.json();
  const resinf = json?.data?.cards[2]?.card?.card?.info;
  setRestInfo(resinf);
  const titles =
    json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map(
      (element) => element?.card?.card
    );
  setCartElements(titles);
};
