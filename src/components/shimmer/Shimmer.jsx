import React from 'react'
import { ShimmerSimpleGallery } from "react-shimmer-effects";

const Shimmer = () => {
  return (
    <div className='container justify-content-center w-70'>
        <ShimmerSimpleGallery card imageHeight={160} caption col={4}/>
    </div>
  )
}

export default Shimmer
