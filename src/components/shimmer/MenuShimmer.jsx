import React from 'react'
import { ShimmerTable } from "react-shimmer-effects";
import { ShimmerThumbnail } from "react-shimmer-effects";
const MenuShimmer = () => {
  return (
  <div className="container mt-2 w-60">
        <ShimmerThumbnail height={200} rounded />;
      <ShimmerTable row={10} col={1}/>
  </div>
  )
}
export default MenuShimmer
