import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import List from '../../components/List/List'
import { getSingleSubCategory } from '../../services/api'
import './Products.scss'
const Products = () => {
  const catId = parseInt(useParams().id)
  const [maxPrice, setMaxPrice] = useState(1000)
  const [sort, setSort] = useState('desc')
  const [subCategory, seSubCategory] = useState([])
  const [selectedSubCategories, setSelectedSubCategories] = useState([])


  // -------------------------------------------


  const fetchSubCategoryData = async () => {
    try {

      const res = await getSingleSubCategory();
      seSubCategory(res.data)
      console.log('getSingleSubCategory', res.data)

    } catch (err) {
      console.log('SubCategory error')
    }

  }

  useEffect(() => {
    fetchSubCategoryData()
    // url
  }, [])


  const handleSubCategoryChange = (e) => {
    const value = e.target.value
    const isChecked = e.target.checked
    setSelectedSubCategories(isChecked ? [...selectedSubCategories, value] : selectedSubCategories.filter(item => item !== value))
  }

  // -------------------------------------------------------------------------------------------------------
  return (
    <div className='products'>
      <div className='left'>

        <div className='filterItem'>

          <h2>Product SubCategories</h2>

          {subCategory.map(item => (
            <div className='inputItem' key={item.id}>
              <input type='checkbox' id={item.id} value={item.id} onChange={handleSubCategoryChange} />
              <label htmlFor={item.id}>{item.title}</label>
            </div>
          ))}

          <div>
          </div>
        </div>
        <div className='filterItem'>
          <h2>Filter By Price</h2>
          <div className='inputItem'>
            <span>0</span>
            <input type='range' man={0} max={1000} onChange={(e) => { setMaxPrice(e.target.value) }} />
            <span>{maxPrice}</span>
          </div>

        </div>
        <div className='filterItem'>
          <h2>Sort By </h2>

          <div className='inputItem'>
            <input type='radio' id='asc' value='asc' name='price' onChange={(e) => { setSort('asc') }} />
            <label htmlFor='asc'>price (lowest first)</label>
          </div>

          <div className='inputItem'>
            <input type='radio' id='desc' value='desc' name='price' onChange={(e) => { setSort('desc') }} />
            <label htmlFor='desc'>price (Height first)</label>
          </div>
        </div>
      </div>


      <div className='right'>
        <img
          className="catImg" src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />

        <List catId={catId} maxPrice={maxPrice} sort={sort} selectedSubCategories={selectedSubCategories} />
      </div>


    </div >
  )
}

export default Products