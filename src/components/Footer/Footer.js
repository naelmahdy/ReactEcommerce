import React from 'react'
import './Footer.scss'
import Container from 'react-bootstrap/Container';

const Footer = () => {
  return (
    <div className='footer'>
      <Container>
        <div className='top '>
          <div className="row">
            <div className="col-md-3 col-sm-12 mt-2">
              <div className='item'>
                <h1>categories</h1>
                <span>woman</span>
                <span>men</span>
                <span>shoes</span>
                <span>accessories</span>
                <span>new arrivals</span>
              </div>
            </div>
            <div className="col-md-3 col-sm-12 mt-2">

              <div className='item'>
                <h1>links</h1>
                <span>FAQ</span>
                <span>pages</span>
                <span>stores</span>
                <span>compare</span>
                <span>cookies</span>
              </div>
            </div>
            <div className="col-md-3 col-sm-12 mt-2">
              <div className='item'>
                <h1>about</h1>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, sunt. Dolores facere tempora tenetur doloribus, velit natus ratione amet esse nesciunt inventore fuga eius, ab exercitationem obcaecati ex rem. Excepturi.</span>

              </div>
            </div>
            <div className="col-md-3 col-sm-12 mt-2">
              <div className='item'>
                <h1>contact</h1>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, sunt. Dolores facere tempora tenetur doloribus, velit natus ratione amet esse nesciunt inventore fuga eius, ab exercitationem obcaecati ex rem. Excepturi.</span>

              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container>
        <div className='bottom mt-3'>
          <div className="row">
            <div className="left col-md-6 col-sm-12">
              <span className='logo'>N2ola store</span>
              <span className='copyright'>© copyright 2023 all rights reserver</span>
            </div>
            <div className=" right col-md-6 col-sm-12">
              <img src='img/payment.png' alt='' />
            </div>

          </div>

        </div>
      </Container>

    </div>
  )
}

export default Footer