import React, { useState } from 'react'
import './Product.scss'
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import { getSingleProduct } from '../../services/api';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../rtk/slices/cartSlice';
import { ToastContainer, toast } from 'react-toastify';

const Product = () => {
  const { id } = useParams();

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [images, seImages] = useState([])


  const fetchData = async () => {
    try {
      setLoading(true)
      const res = await getSingleProduct(id);
      console.log(res)
      setData(res.data)
      seImages([[res.data.img], [res.data.img2]])

    } catch (err) {
      setError(true)
    }

    setLoading(false)
  }

  useEffect(() => {
    fetchData()
    // console.log(data)
    // url
  }, [])

  const [selectedImg, setSelectedImg] = useState(0)
  const [quantity, setQuantity] = useState(1)
  // -------------------------------------------------------------------------------------------------
  // --------------------------------   rtk  ----------------------------------------------------------
  // -------------------------------------------------------------------------------------------------

  const dispatch = useDispatch();

  return (
    <div className='product'>



      {
        error ? 'sothing went wrong' :
          (loading ? 'loading' : <>


            <div class="row">
              <div class="col-md-6 col-sm-12 mt-4">
                <div className="left">
                  <div className='images'>
                    <img src={images[0]} alt="" onClick={(e) => { setSelectedImg(0) }} />
                    <img src={images[1]} alt="" onClick={(e) => { setSelectedImg(1) }} />
                  </div>
                  <div className="mainImg">

                    <img src={images[selectedImg]} alt="" />

                  </div>

                </div>

              </div>
              <div class="col-md-6 col-sm-12 mt-4">
                <div className="right">
                  <h1>{data.title}</h1>
                  <span>Price {data.price}</span>
                  <p>{data.description}</p>


                  <div className="quantity">
                    <button onClick={(e) => { setQuantity(prev => prev === 1 ? 1 : prev - 1) }}>-</button>
                    {quantity}
                    <button onClick={(e) => { setQuantity(prev => prev + 1) }}>+</button>
                  </div>


                  <button className="add" onClick={() => dispatch(addToCart({ ...data, quantity })) & toast.success(`${data.title} is added`)}>

                    <AddShoppingCartIcon /> ADD TO CART

                  </button>

                  <div className="links">
                    <div className="item">
                      <FavoriteBorderIcon /> ADD TO WISH LIST
                    </div>
                    <div className="item">
                      <BalanceIcon /> ADD TO COMPARE
                    </div>
                  </div>


                  <div className="info">
                    <span>Vendor: Polo</span>
                    <span>Product Type: T-Shirt</span>
                    <span>Tag: T-Shirt, Women, Top</span>
                  </div>

                  <hr />

                  <div className="info">
                    <span>DESCRIPTION</span>
                    <hr />
                    <span>ADDITIONAL INFORMATION</span>
                    <hr />
                    <span>FAQ</span>
                  </div>
                </div>

              </div>
              <ToastContainer
                position='top-left'
                autoClose={300}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme='dark'
              />

            </div>




          </>)


      }




    </div >
  )
}

export default Product