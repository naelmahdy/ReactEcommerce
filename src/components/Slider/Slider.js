import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './Slider.scss'
const Slider = () => {
  return (
    <div className='slider'>

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5e8265170482109.645e6a29ac0ad.jpg"
            alt="First slide"
          />

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/a882dd170482109.645e6a29ab34c.jpg"
            alt="Second slide"
          />


        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/8779e4170482109.645e6a29acd4a.jpg"
            alt="Third slide"
          />


        </Carousel.Item>
      </Carousel>

    </div >
  )
}

export default Slider