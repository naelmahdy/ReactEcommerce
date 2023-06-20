import React from 'react'
import './Footer.scss'
import Container from 'react-bootstrap/Container';

const Footer = () => {
  return (
    <div className='footer'>
      <Container>
        <div className='top row'>
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
              <span>compare</span>
            </div>
          </div>

          <div className="col-md-3 col-sm-12 mt-2">
            <div className='item'>
              <h1>about</h1>
              <span>hello i'm Nael Elmahdy frontend devloper </span>
              <span>graduated from Fci zagazig </span>
              <span>programming is my passion </span>

            </div>
          </div>
          <div className="col-md-3 col-sm-12 mt-2">
            <div className='item'>
              <h1>contact</h1>

              <span>Phone:+201066342015 </span>
              <span>Email:naelmahdy33@gmail.com</span>
              <span>programming is my passion </span>

            </div>
          </div>
        </div>
      </Container>
      <Container>
        <div className='bottom my-3' text-center>
          <div className="left">
            <span className='logo'>N2ola store</span>
            <span className='copyright'>© copyright 2023 all rights reserver</span>
          </div>



        </div>
      </Container>

    </div>
  )
}

export default Footer