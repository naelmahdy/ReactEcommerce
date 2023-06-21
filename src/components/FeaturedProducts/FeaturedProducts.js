import React, { useEffect, useState } from 'react'
import { getTypeOfProducts } from '../../services/api'
import Card from '../Card/Card'
import FetchProductsError from '../FetchProductsError/FetchProductsError'
import './FeatchuredProducts.scss'

const FeaturedProducts = ({ type }) => {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const res = await getTypeOfProducts();
        // console.log('FeaturedProducts', res)
        type === 'trending' ? setData(res.data[0].products) : setData(res.data[1].products);
      } catch (err) {
        setError(true)
      }
      setLoading(false)

    }
    fetchData()
    // url
  }, [type])


  return (
    <div className='featuredProducts my-5 container'>
      <div className='top my-5'>
        <div className="row">
          <div className="col-4">
            <h1>{type} products</h1>
          </div>
          <div className="col-8">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
              suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
              lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
              suspendisse ultrices gravida. Risus commodo viverra maecenas.
            </p>
          </div>

        </div>

      </div>
      <div className='bottom row'>
        {
          error ? <FetchProductsError /> :
            (loading ? 'loading' : data.slice(0, 4).map(item => <Card key={item.id} item={item} />))
          // (loading ? 'loading' : data.slice(0, 3).map(item => <Card2 key={item.id} item={item} />))
        }

      </div>
    </div>
  )
}

export default FeaturedProducts