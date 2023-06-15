import React, { useEffect, useState } from 'react'
import './List.scss'
import Card from '../Card/Card'
import { getSingleCategory, getSingleSubCategory, maxPriceRangeProduct, sortProduct } from '../../services/api'

const List = ({ selectedSubCategories, maxPrice, sort, catId }) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const [selectedHelper, setSelectedHelper] = useState(null)
  // const [selected, setSelected] = useState([])



  const fetchData = async () => {
    try {
      setLoading(true)
      const res = await getSingleCategory();
      const res2 = await getSingleSubCategory();

      // type === 'trending' ? setData(res.data[0].products) : setData(res.data[1].products);
      setData(res.data[catId].products)
      setSelectedHelper(res2)
      // console.log(res.data[catId].products);

    } catch (err) {
      setError(true)
    }

    setLoading(false)
  }

  useEffect(() => {
    fetchData()
    // url
  }, [])


  useEffect(() => {
    const added = []

    selectedSubCategories.map(item => (
      // (selectedHelper.data[item - 1].products).map(item => selected(...selected, ...item))
      // setSelected(...selected, ...selectedHelper.data[item - 1].products)
      // added.push()
      // console.log(selectedSubCategories)
      selectedHelper.data[item - 1].products.map(item => added.push(item))

    ))

    setData(added)

  }, [selectedSubCategories])
  //-------------------------------------------------------------------------------------------------------------
  //----------------------------------------------  sort  -------------------------------------------------------
  //-------------------------------------------------------------------------------------------------------------


  const sortProducts = async () => {
    try {
      const res = await sortProduct(sort);

      console.log('res', res.data)
      // console.log('data', data)
      // console.log(sort)
      setData(res.data)

    } catch (err) {
      console.log('sortProducts error')
    }

  }

  useEffect(() => {
    sortProducts()
    // url
  }, [sort])
  //-------------------------------------------------------------------------------------------------------------
  //------------------------------------------  value from range  ------------------------------------------------
  //-------------------------------------------------------------------------------------------------------------

  const maxPriceProducts = async () => {
    try {
      const res = await maxPriceRangeProduct(maxPrice);

      // console.log('res', res)
      setData(res.data)
      // console.log('max price', maxPrice)

    } catch (err) {
      console.log('sortProducts error')
    }
  }

  useEffect(() => {
    maxPriceProducts()
    // url
  }, [maxPrice])
  return (
    <div className='list'>

      {error ? 'something went wrong' : (loading ? 'loading' : data?.map(item => (< Card item={item} key={item.id} />)))}


    </div>

  )
}

export default List


