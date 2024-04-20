export const restaurantFilter = (searchText, restaurantData) => {
  return restaurantData?.filter((item) => {
    return item?.info?.name.toLowerCase().includes(searchText.toLowerCase());
  });
};
