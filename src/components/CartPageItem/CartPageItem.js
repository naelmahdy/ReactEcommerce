import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './CartPageItem.scss'
import { ToastContainer, toast } from 'react-toastify';
import { clearCart, decrease, increase, removeFromCart } from '../../rtk/slices/cartSlice';

import ClearIcon from '@mui/icons-material/Clear';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import KeyboardBackspaceTwoToneIcon from '@mui/icons-material/KeyboardBackspaceTwoTone';

const CartPageItem = () => {
  const products = useSelector(state => state.cart)
  const dispatch = useDispatch()
  return (
    <div className='cartPageItem'>



      <div className="w-100">
        <h2 className=''>shopping cart </h2>
      </div>


      <div className='shoppingCart'>

        {
          products.map((item) => (
            <div key={item.id} className='shoppingCartContainer'>
              <div>
                <ClearIcon className='muiClose' color='error' onClick={() => dispatch(removeFromCart(item)) & toast.error(`${item.title} is deleted`)} />
                <img src={item.img} alt="" className='ms-3' />
              </div>

              <h3>{item.title}</h3>
              <p>$ {item.price}</p>

              <div className="quantity">
                Quantity
                <Button variant="light"

                  onClick={() => (dispatch(decrease(item)) & toast.error(`${item.title} decreased by 1`))}

                >
                  -
                </Button>
                {item.quantity}
                <Button variant="light"
                  onClick={() => (dispatch(increase(item)) & toast.success(`${item.title} increased by 1`))}

                >
                  +</Button>
              </div>
              <p>${item.quantity * item.price}</p>

            </div>

          ))}
        <Button variant="danger" className='my-3'
          onClick={() => dispatch(clearCart()) & toast.error(`cart is empty`)}>
          reset Cart
        </Button>

        <div>
          <Link to='/'>
            <Button variant="light"><KeyboardBackspaceTwoToneIcon /> Go Back To Shopping</Button>{' '}
          </Link></div>

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

  )
}

export default CartPageItem