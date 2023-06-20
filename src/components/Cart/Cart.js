import React from 'react'
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import './Cart.scss'
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, removeFromCart } from '../../rtk/slices/cartSlice';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Cart = () => {


  const products = useSelector(state => state.cart)
  const dispatch = useDispatch();

  // console.log('products', products)
  const totalPrice = () => {
    let total = 0;
    products.forEach(item => total += item.quantity * item.price);
    return total.toFixed(2);
  }
  return (

    <div className='cart'>
      <h1>{products.length === 0 ? "You Don't Have Products" : "Products in cart"}</h1>
      {products?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item?.description.substring(0, 50)}</p>

            <div className="price">  {item.quantity} * ${item.price} </div>
          </div>
          <DeleteOutlinedIcon className='delete' onClick={() => dispatch(removeFromCart(item)) & toast.error(`${item.title} is deleted`)} />
        </div>
      ))}

      <div className="total">
        <span>subtotal</span>
        <span>${totalPrice()}</span>
      </div>


      <Button className='d-flex  justify-content-center align-items-center' variant="primary" as={Link} to={'/cart'}>go to cart</Button>


      <span className="reset" onClick={() => dispatch(clearCart()) & toast.error(`cart is empty`)}>Clear cart</span>


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

export default Cart