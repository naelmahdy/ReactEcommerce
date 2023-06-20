import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './shipping.scss'
import joi from 'joi'
import Joi from 'joi';
import { useDispatch, useSelector } from 'react-redux';

const Shipping = () => {

  const [errorsList, setErrorsList] = useState([])

  const products = useSelector(state => state.cart)
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationResponse = validateFormData()
    if (validationResponse.error) {
      setErrorsList(validationResponse.error.details)
    } else {


      // Handle form submission here

      // console.log('Form submitted');
      // dispatch(removeFromCart(item))
      // toast.error(`${item.title} is deleted`)
    }
  }


  let validateFormData = () => {

    const schema = Joi.object({

      name: joi.string().required().min(2),
      address: joi.string().required().min(2),
      city: joi.string().required().min(2),
      state: joi.string().required().min(2),
      zip: joi.number().required().min(1000),

    })

    return (
      <div className='shipping'>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formCity">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formState">
            <Form.Label>State</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your state"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formZip">
            <Form.Label>ZIP Code</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your ZIP code"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>

      </div>

    )
  }
}
export default Shipping