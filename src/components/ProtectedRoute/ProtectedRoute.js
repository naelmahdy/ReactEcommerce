import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ adminData, children }) => {
  // console. log(adminData())
  if (adminData() === null & localStorage.getItem('adminData') === null) {
    return <Navigate to='/' />
  } else {
    return children
  }

}

export default ProtectedRoute