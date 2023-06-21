import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { editProduct, getCategories, getSingleProduct, getSubCategories, getTypes } from '../../../services/api';
import joi from 'joi';
import Joi from 'joi';
import { ToastContainer, toast } from 'react-toastify';
import AOS from 'aos';
import 'aos/dist/aos.css';
const EditProduct = () => {


  // get the api and show the data in the options
  const [categories, setCategories] = useState([])
  const [subCategory, setSubCategory] = useState([])
  const [types, setTypes] = useState([])
  // ----------------------------------------------------------
  // data sent to the api
  const [isNew, setIsNew] = useState(true)
  // ---------------------------------------------------------------

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [img, setImg] = useState('')
  const [img2, setImg2] = useState('')
  const [price, setPrice] = useState('')
  const [oldPrice, setOldPrice] = useState('')

  const [categoriesValue, setCategoriesValue] = useState('')
  const [subCategoryValue, setSubCategoryValue] = useState('')
  const [typesValue, setTypesValue] = useState('')
  // ---------------------------------------------------------------
  const { id } = useParams();
  const navigate = useNavigate();
  // --------------------------------------------------
  const [errorsList, setErrorsList] = useState([])

  // --- get the products from the api
  const getProductById = async () => {
    getSingleProduct(id).then((res) => {
      console.log('res', res.data)
      setTitle(res.data.title)
      setDescription(res.data.description)
      setImg(res.data.img)
      setImg2(res.data.img2)
      setPrice(res.data.price)
      setOldPrice(res.data.oldPrice)
      setCategoriesValue(res.data.categoryId)
      setSubCategoryValue(res.data.subCategoryId)
      setTypesValue(res.data.typeId)
      setIsNew(res.data.isNew)
    })



  }
  // -------------------------------------
  useEffect(() => {
    AOS.init();
    AOS.refresh();
    getCategories().then((res) => {
      setCategories(res.data)
    })
    getSubCategories().then((res) => {
      setSubCategory(res.data)
    })

    getTypes().then((res) => {
      setTypes(res.data)
    })
    getProductById();

  }, [])
  // -------------------------------------

  const categoriesUi = categories.map((category) =>
    <option selected={category.id === categoriesValue} key={category.id} value={category.id} >{category.title} </option>);


  const subCategoryUi = subCategory.map((subCategory) =>
    <option key={subCategory.id} selected={subCategory.id === subCategoryValue} value={subCategory.id} >{subCategory.title}</option>);

  const typesUi = types.map((type) =>
    <option selected={type.id === typesValue} key={type.id} value={type.id} >{type.title}</option>);

  const onSubmitHandler = (e) => {
    e.preventDefault()
    let validationResponse = validateFormData()
    if (validationResponse.error) {
      setErrorsList(validationResponse.error.details)
    } else {
      let updatedProduct = {
        id,
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
      }
      // console.log(updatedProduct)
      editProduct(updatedProduct).then((res) => {
        // console.log('res', res);
        // console.log('done');
        if (res.status === 200 || res.status === 201) {
          toast.success(`item is edited successfully`)

          console.log('navigate')
          navigate("/");
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
      price: joi.number().required().min(1),
      oldPrice: joi.number().required().min(1),

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
          <Form.Control onChange={(e) => setTitle(e.target.value)} type="text" placeholder="add book title"
            value={title} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="description">
          <Form.Label>description</Form.Label>
          <Form.Control value={description} onChange={(e) => setDescription(e.target.value)} type="text" placeholder="add description title" />
        </Form.Group>


        <Form.Group className="mb-3" controlId="img">
          <Form.Label>img </Form.Label>
          <Form.Control value={img} onChange={(e) => setImg(e.target.value)} type="text" placeholder="add first image title" />
        </Form.Group>


        <Form.Group className="mb-3" controlId="img2">
          <Form.Label>img2 </Form.Label>
          <Form.Control value={img2} onChange={(e) => setImg2(e.target.value)} type="text" placeholder="add second image title" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="price">
          <Form.Label>price </Form.Label>
          <Form.Control value={price} onChange={(e) => setPrice(e.target.value)} type="text" placeholder="add price " />
        </Form.Group>

        <Form.Group className="mb-3" controlId="oldPrice">
          <Form.Label>oldPrice </Form.Label>
          <Form.Control value={oldPrice} onChange={(e) => setOldPrice(e.target.value)} type="text" placeholder="add oldPrice" />
        </Form.Group>



        <Form.Group className="mb-3" controlId="isNew">
          <Form.Label>is new? </Form.Label>
          <Form.Select size="sm" aria-label=" select isNew or"
            onChange={(e) => { setIsNew(e.target.value) }} value={isNew}>
            <option disabled >-</option>
            <option selected={isNew === 1} value={1} >New</option>
            <option selected={isNew === 1} value={0}>Old</option>
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

export default EditProduct