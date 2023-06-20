import React, { useState } from 'react'
import './Register.scss'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { addUser, validateUser } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import joi from 'joi'
const Register = () => {
  const [fName, setFName] = useState('')
  const [LName, setLName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [errorsList, setErrorsList] = useState([])

  const id = Math.floor(Math.random() * 100)
  let navigate = useNavigate()

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    let validationResponse = validateFormData()
    // console.log(validationResponse)
    if (validationResponse.error) {
      setErrorsList(validationResponse.error.details)
    } else {

      const res = await validateUser(email);
      if (res.data.length > 0) {
        if (res?.data[0].Email === email) {
          setErrorMessage('Email already registered')
        }
      } else {
        addUser({
          FirstName: fName,
          LastName: LName,
          Phone: phone,
          Email: email,
          Password: password,
          id
        })
        navigate("/login");
      }
    }
  }

  let validateFormData = () => {
    const schema = joi.object({
      //alphanum number string with no special character
      // tlds TopLevelDomainOptions 
      //abortEarly:false all errors
      fName: joi.string().alphanum().required().min(2).max(10),
      LName: joi.string().alphanum().required().min(2).max(10),
      phone: joi.string().required().pattern(new RegExp(/^01[0125][0-9]{8}$/)),
      email: joi.string().required().email({ tlds: { allow: ["com", "net"] } }),
      password: joi.string().required().min(2).max(10),
    })
    return schema.validate({ fName, LName, phone, email, password }, { abortEarly: false })
  }
  return (
    <div className='register container  '>

      <h2>Register form      </h2>
      {errorsList.map((error, index) =>
        <div key={index} className='alert alert-danger'>{error.message}</div>
      )}
      {errorMessage ? <div className='alert alert-danger'>{errorMessage}</div> : ''}

      <Form
        onSubmit={onSubmitHandler}
      >

        <Form.Group className="my-3" controlId="FName">
          <Form.Label>First Name </Form.Label>
          <Form.Control type="text" placeholder="Enter First Name"
            onChange={(e) => setFName(e.target.value)}
          />

        </Form.Group>

        <Form.Group className="my-3" controlId="LName">
          <Form.Label>Last Name </Form.Label>
          <Form.Control type="text" placeholder="Enter Last Name"
            onChange={(e) => setLName(e.target.value)}
          />

        </Form.Group>

        <Form.Group className="my-3" controlId="Phone">
          <Form.Label> Phone Number </Form.Label>
          <Form.Control type="number" placeholder="Enter your Phone Number "
            onChange={(e) => setPhone(e.target.value)}
          />

        </Form.Group>




        <Form.Group className="mb-3" controlId="Email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />


        </Form.Group>

        <Form.Group className="my-3" controlId="Password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>


    </div>
  )
}

export default Register