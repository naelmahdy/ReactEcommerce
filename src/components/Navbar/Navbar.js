import React, { useEffect, useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import './Navbar.scss'
import Cart from '../Cart/Cart';
import { useSelector } from 'react-redux';

const MainNavbar = ({ userData, logOut }) => {
  const [open, setOpen] = useState(false)
  const cart = useSelector((state) => state.cart);
  const [isLogin, setIsLogin] = useState(false)



  useEffect(() => {
    if (userData) {
      setIsLogin(true)
    } else {
      setIsLogin(false)
    }
    // console.log('userData', userData)

  }, [userData, isLogin])

  return (
    <>
      <Navbar bg="light" expand="lg" className='text-center navbar' fixed="top">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">

              <Nav.Link as={Link} to={'/'} className='text-dark'>
                <img src="img/en.png" alt="" />
                <KeyboardArrowDownIcon />
              </Nav.Link>
              <Nav.Link as={Link} to={'/products/1'} className='text-dark'>woman</Nav.Link>
              <Nav.Link as={Link} to={'/products/1'} className='text-dark'>men</Nav.Link>
              <Nav.Link as={Link} to={'/products/1'} className='text-dark'>children</Nav.Link>
            </Nav>

            <Nav className="m-auto h4 ">
              <Nav.Link as={Link} to={'/'} className='text-dark'>N2ola store</Nav.Link>
            </Nav>

            <Nav className="ms-auto d-flex align-items-center">
              <Nav.Link as={Link} to={'/'} className='text-dark'>homePage</Nav.Link>
              <Nav.Link as={Link} to={'/about'} className='text-dark'>about</Nav.Link>
              <Nav.Link as={Link} to={'/'} className='text-dark'>contact</Nav.Link>
              <Nav.Link as={Link} to={'/'} className='text-dark'>store</Nav.Link>
              <div className="icons d-flex">
                <SearchIcon />
                <PersonOutlineIcon />
                <FavoriteBorderIcon />
                <div className="cartIcon" onClick={() => { setOpen(!open) }}>
                  <ShoppingCartOutlinedIcon />
                  <span>{cart.length}</span>
                </div>
              </div>
              <div className='d-flex ms-1'>
                {userData ?

                  <>
                    <Nav.Link as={Link} onClick={logOut} className='text-dark'>Logout</Nav.Link>

                  </>

                  :
                  <>
                    <Nav.Link as={Link} to={'/login'} className='text-dark'>Login</Nav.Link>
                    <Nav.Link as={Link} to={'/register'} className='text-dark'>Register</Nav.Link>
                  </>
                }




              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
        {open && <Cart />}

      </Navbar>


    </>
  )
}

export default MainNavbar