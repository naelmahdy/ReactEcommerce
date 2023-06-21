import Joi from 'joi';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { addProduct, getCategories, getSubCategories, getTypes } from '../../../services/api';
import joi from 'joi'
import { ToastContainer, toast } from 'react-toastify';
import AOS from 'aos';
import 'aos/dist/aos.css';
const AddProduct = () => {
  let navigate = useNavigate()
  // get the api and show the data in the options
  const [categories, setCategories] = useState([])
  const [subCategory, setSubCategory] = useState([])
  const [types, setTypes] = useState([])
  // ----------------------------------------------------------
  // data sent to the api
  const [isNew, setIsNew] = useState(true)
  // ---------------------------------------------------------------

  const [title, setTitle] = useState()
  const [description, setDescription] = useState()
  const [img, setImg] = useState()
  const [img2, setImg2] = useState()
  const [price, setPrice] = useState()
  const [oldPrice, setOldPrice] = useState()

  const [categoriesValue, setCategoriesValue] = useState()
  const [subCategoryValue, setSubCategoryValue] = useState()
  const [typesValue, setTypesValue] = useState()
  // ---------------------------------------------------------------
  const [errorsList, setErrorsList] = useState([])


  useEffect(() => {
    AOS.init();
    AOS.refresh();
    getCategories().then((res) => {
      setCategories(res.data)
      setCategoriesValue(res.data[0].id)
    })
    getSubCategories().then((res) => {
      setSubCategory(res.data)
      setSubCategoryValue(res.data[0].id)
    })

    getTypes().then((res) => {
      setTypes(res.data)
      setTypesValue(res.data[0].id)
    })
  }, [])

  const categoriesUi = categories.map((category) =>
    <option key={category.id} value={category.id} >{category.title} </option>);

  const subCategoryUi = subCategory.map((subCategory) =>
    <option key={subCategory.id} value={subCategory.id} >{subCategory.title}</option>);

  const typesUi = types.map((type) => <option key={type.id} value={type.id} >{type.title}</option>);


  const onSubmitHandler = (e) => {
    e.preventDefault();
    let validationResponse = validateFormData()
    if (validationResponse.error) {
      setErrorsList(validationResponse.error.details)
    } else {
      addProduct({
        title: title,
        description: description,
        img: img,
        img2: img2,
        price: price,
        oldPrice: oldPrice,
        isNew: Number(isNew),
        categoryId: Number(categoriesValue),
        subCategoryId: Number(subCategoryValue),
        typeId: Number(typesValue)
      }).then((res) => {
        console.log(res);
        if (res.status === 200 || res.status === 201) {
          toast.success(`item is added successfully`)

          navigate("/admin");
        }
      });

    }

  }

  let validateFormData = () => {

    const schema = Joi.object({
      //alphanum number string with no special character
      // tlds TopLevelDomainOptions 
      //abortEarly:false all errors
      title: joi.string().required().min(2),
      description: joi.string().required().min(2),
      img: joi.string().required().min(2),
      img2: joi.string().required().min(2),
      price: joi.number().required().min(10),
      oldPrice: joi.number().required().min(10),

    })
    return schema.validate({ title, description, img, img2, price, oldPrice }, { abortEarly: false })
  }
  return (
    <div>
      {errorsList.map((error, index) =>
        <div key={index} className='mt-3 container alert alert-danger'>{error.message}</div>
      )}
      <Form onSubmit={onSubmitHandler} className='container my-3' data-aos="zoom-out-right" data-aos-duration="3000">

        <Form.Group className="mb-3" controlId="title">
          <Form.Label>title</Form.Label>
          <Form.Control onChange={(e) => setTitle(e.target.value)} type="text" placeholder="add book title" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="description">
          <Form.Label>description</Form.Label>
          <Form.Control onChange={(e) => setDescription(e.target.value)} type="text" placeholder="add description title" />
        </Form.Group>


        <Form.Group className="mb-3" controlId="img">
          <Form.Label>img </Form.Label>
          <Form.Control onChange={(e) => setImg(e.target.value)} type="text" placeholder="add first image title" />
        </Form.Group>







        <Form.Group className="mb-3" controlId="img2">
          <Form.Label>img2 </Form.Label>
          <Form.Control onChange={(e) => setImg2(e.target.value)} type="text" placeholder="add second image title" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="price">
          <Form.Label>price </Form.Label>
          <Form.Control onChange={(e) => setPrice(e.target.value)} type="text" placeholder="add price " />
        </Form.Group>

        <Form.Group className="mb-3" controlId="oldPrice">
          <Form.Label>oldPrice </Form.Label>
          <Form.Control onChange={(e) => setOldPrice(e.target.value)} type="text" placeholder="add oldPrice" />
        </Form.Group>


        <Form.Group className="mb-3" controlId="isNew">
          <Form.Label>is new? </Form.Label>
          <Form.Select size="sm" aria-label=" select isNew or"
            onChange={(e) => { setIsNew(e.target.value) }} >
            <option disabled >-</option>
            <option value={true} >New</option>
            <option value={false}>Old</option>
          </Form.Select>
        </Form.Group>




        <Form.Group className="mb-3" controlId="category">
          <Form.Label>category</Form.Label>
          <Form.Select size="sm" aria-label="Default select example"
            onChange={(e) => { setCategoriesValue(e.target.value) }} defaultValue="1">
            <option disabled >-</option>
            {categoriesUi}
          </Form.Select>
        </Form.Group>



        <Form.Group className="mb-3" controlId="subCategory">
          <Form.Label>subCategory </Form.Label>
          <Form.Select size="sm" aria-label="Default select example"
            onChange={(e) => { setSubCategoryValue(e.target.value) }}>
            <option disabled >-</option>
            {subCategoryUi}
          </Form.Select>
        </Form.Group>





        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>type </Form.Label>
          <Form.Select size="sm" aria-label="Default select example"
            onChange={(e) => { setTypesValue(e.target.value) }}>
            <option disabled >-</option>
            {typesUi}
          </Form.Select>

        </Form.Group>





        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>




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

export default AddProduct