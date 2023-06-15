import React, { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import MainNavbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import '../common.scss'

const Homelayout = () => {
  const [userData, setUserData] = useState(null)
  useEffect(() => {
    if (localStorage.getItem('userData')) {
      setUserData(localStorage.getItem('userData'))
    }

  }, [userData])
  let logOut = () => {
    localStorage.removeItem('userData')
    setUserData(null)
    return <Navigate to={'/'} />

  }
  return (
    <div className='app'>
      <MainNavbar userData={userData} logOut={logOut} />

      <Outlet />
      <Footer />



    </div>
  )
}

export default Homelayout