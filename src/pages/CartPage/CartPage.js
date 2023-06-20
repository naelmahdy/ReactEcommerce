import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
// import { useSelector } from 'react-redux'
import CartPageItem from '../../components/CartPageItem/CartPageItem'
import './CartPage.scss'
import KeyboardBackspaceTwoToneIcon from '@mui/icons-material/KeyboardBackspaceTwoTone';
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
// import axios from 'axios'


const CartPage = () => {
  const navigate = useNavigate();

  const products = useSelector(state => state.cart)
  const [totalPrice, setTotalPrice] = useState('')
  useEffect(() => {
    let price = 0;
    products.map((item) => {
      price += item.price * item.quantity
      return price
    })
    setTotalPrice(price.toFixed(2))
  }, [products])

  const handleCheckout = () => {
    // console.log(JSON.parse(localStorage.getItem('userData'))['FirstName'])
    if (localStorage.getItem('userData')) {

      // console.log('loggedIn')
      navigate('/shipping')


    } else {
      toast.error('You are not logged in please login')
      setTimeout(function () {
        navigate('/login')
      }, 2000);

    }
  }

  // const payment = async (token) => {

  //   await axios.post("http://localhost:5000/pay", {
  //     amount: totalPrice * 100,
  //     token: token

  //   })
  // }
  return (
    <div className='cartPage'>
      <img
        className='w-full h-60 object-cover'
        src="https://images.pexels.com/photos/1435752/pexels-photo-1435752.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />


      <div className="container mx-auto py-5">
        {products.length > 0 ? <>

          <div className="row">
            <div className="col-md-8 col-sm-12">
              <CartPageItem />
            </div>
            <div className="col-md-4 col-sm-12 px-4 py-5 grayBg">
              <div className=' d-flex flex-column gap-3 border-bottom border-dark'>
                <h2 className='fs-2 fw-bold'>cart totals</h2>
                <p className='d-flex align-items-center h4'>
                  Subtotal{''}
                  <span className='fw-bold ms-3'>
                    $ {totalPrice}
                  </span>
                </p>
                <p className='d-flex align-items-start h4 fs-5'>
                  shipping{''}
                  <span className=' ms-3'>
                    Lorem ipsum dolor sit  consectetur,  . Provident
                  </span>
                </p>

              </div>

              <p className='d-flex justify-content-between fw-bold my-4'>
                total <span className='fw-bolder ms-3'>$ {totalPrice}</span>
              </p>

              <Button variant="dark" className='w-100' onClick={handleCheckout}>proceed to checkout</Button>

            </div>
          </div>


        </>
          : <> <div className='fw-bold text-center text-danger h3'>yor cart is empty.please go back to
            shopping and add products to Cart.

            <div className='mt-4'>
              <Link to='/'>
                <Button variant="light"><KeyboardBackspaceTwoToneIcon /> Go Back To Shopping</Button>{' '}
              </Link></div>

          </div></>}

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




    </div>

  )
}

export default CartPage