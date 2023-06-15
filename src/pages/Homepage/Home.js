import React from 'react'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import Slider from '../../components/Slider/Slider'
import Categories from '../../components/Categories/Categories'

const Homepage = () => {
  return (
    <div>
      <Slider />
      <FeaturedProducts type='featured' />
      <Categories />
      <FeaturedProducts type='trending' />

    </div>
  )
}

export default Homepage