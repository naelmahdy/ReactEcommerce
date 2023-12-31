import React, { useEffect, useState } from 'react'
import './Login.scss'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { getUser } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import joi from 'joi'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Login = ({ logIn }) => {

  useEffect(() => {

    AOS.init();
    AOS.refresh();

  }, [])
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [errorMessage, setErrorMessage] = useState('')
  const [errorsList, setErrorsList] = useState([])


  const navigate = useNavigate();


  const onSubmitHandler = async (e) => {
    e.preventDefault()
    console.log(logIn)

    let validationResponse = validateFormData()
    if (validationResponse.error) {
      setErrorsList(validationResponse.error.details)
    } else {
      const res = await getUser(email, password);
      if (res.data.length > 0) {
        localStorage.setItem('userData', JSON.stringify(res.data[0]))
        navigate("/cart");


      } else {
        setErrorMessage('email or password is inCorrect')
      }
    }
  }


  let validateFormData = () => {
    const schema = joi.object({
      email: joi.string().required().email({ tlds: { allow: ["com", "net"] } }),
      password: joi.string().required().min(2).max(10),
    })
    return schema.validate({ email, password }, { abortEarly: false })
  }




  return (
    <div className='login'>
      <h2>Login form      </h2>
      {errorsList.map((error, index) =>
        <div key={index} className='alert alert-danger'>{error.message}</div>
      )}
      {errorMessage ? <div className='alert alert-danger'>{errorMessage}</div> : ''}

      <Form onSubmit={onSubmitHandler} data-aos="zoom-out-right" data-aos-duration="3000">
        <Form.Group className="mb-3" controlId="formBasicEmail" >
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />

        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword" >
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>

    </div>
  )
}

export default Login