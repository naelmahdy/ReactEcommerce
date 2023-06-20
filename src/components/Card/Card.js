import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { addToCart } from '../../rtk/slices/cartSlice';
import './Card.scss'
import { ToastContainer, toast } from 'react-toastify';

const Card = ({ item }) => {
  const dispatch = useDispatch();
  let quantity = 1;

  return (
    <div className='card col-md-4 col-sm-12 p-1'>
      <Link className="link " to={`/product/${item.id}`}>
        <div className=''>
          <div className='image'>
            {item.isNew ? <span>New Season</span> : ""}
            <img src={item.img} alt='' className='mainImg' />
            <img src={item.img2} alt='' className='secondImg' />
          </div>
          <h2>{item.title}</h2>
          <div className='prices'>
            <h3>${item.oldPrice || Number(item.price) + 20}</h3>
            <h3>${item.price}</h3>
          </div>
        </div>
      </Link>
      <div><button type="button" className="btn btn-primary" onClick={() => item.price && dispatch(addToCart({ ...item, quantity })) & toast.success(`${item.title} is added`)}>Add To Cart</button>
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

export default Card