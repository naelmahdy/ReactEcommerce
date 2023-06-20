import React, { useEffect, useState } from 'react'
import './Products.scss'
import Table from 'react-bootstrap/Table';
import { deleteProduct, getAllProducts, getCategories, getSubCategories, getTypes } from '../../../services/api'
import { Image } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';


const AdminProducts = () => {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [subCategory, setSubCategory] = useState([])
  const [types, setTypes] = useState([])

  useEffect(() => {
    getAllProducts().then((res) => {
      setProducts(res.data)
    })
    getCategories().then((res) => {
      setCategories(res.data)
    })
    getSubCategories().then((res) => {
      setSubCategory(res.data)
    })

    getTypes().then((res) => {
      setTypes(res.data)
    })

  }, [])


  // Helper function to get category name by ID
  const getCategoryName = (categoryId) => {
    const category = categories.find((category) => category.id === categoryId);
    return category ? category.title : '';
  };

  // Helper function to get subcategory name by ID
  const getSubcategoryName = (subcategoryId) => {
    const subcategory = subCategory.find((subcategory) => subcategory.id === subcategoryId);
    return subcategory ? subcategory.title : '';
  };

  // Helper function to get type name by ID
  const getTypeName = (typeId) => {
    const type = types.find((type) => type.id === typeId);
    return type ? type.title : '';
  };



  // ---------------------------------------------- delete-------------------------------------------
  const deleteSelectedProduct = (id) => {
    deleteProduct(id).then((res) => {
      if (res.status === 200) {
        toast.error(`item is deleted successfully`)

        getAllProducts().then((res) => {
          setProducts(res.data)
        })
      }
    })
  }
  // -------------------------------------------------------------------------------------------------

  const editSelectedProduct = (id) => {


  }
  // ----------------------------------------------------------------------------------------------
  const renderProducts = products.map((product) => (
    <tr key={product.id}>
      <td>{product.title}</td>
      <td>{product.description}</td>
      <td><Image src={product.img} alt="" thumbnail style={{ width: '50px' }} /></td>
      <td><Image src={product.img2} alt="" thumbnail style={{ width: '50px' }} /></td>
      <td>{product.price}</td>
      <td>{product.oldPrice || product.price - 20}</td>
      <td>{product.isNew ? "New" : "old"}</td>
      <td>{getCategoryName(product.categoryId)}</td>
      <td>{getSubcategoryName(product.subCategoryId)}</td>
      <td>{getTypeName(product.typeId)}</td>

      <td className='text-center'>
        <Button className='mx-1' variant='danger' onClick={() => deleteSelectedProduct(product.id)}>Delete</Button>

        <Button variant='primary' as={Link} to={`edit-product/${product.id}`}
          onClick={() => editSelectedProduct(product.id)}>Edit</Button>
      </td>

    </tr>
  ))

  return (
    <div className='px-2 mt-2'>

      <Button as={Link} to={'add-product'} variant="primary" className='mb-3'>Add New Product</Button>

      <Table striped bordered hover>
        <thead>
          <tr >
            <th>#</th>
            <th>title </th>
            <th>img1 </th>
            <th>img2</th>
            <th>price</th>
            <th>oldPrice</th>
            <th>isNew</th>
            <th>categoryId</th>
            <th>subCategoryId</th>
            <th>typeId</th>
            <th className='text-center'>actions</th>

          </tr>
        </thead>
        <tbody>
          {renderProducts}

        </tbody>
      </Table>



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

export default AdminProducts