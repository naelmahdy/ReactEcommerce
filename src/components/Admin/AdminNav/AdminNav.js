import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './AdminNav.scss'
const AdminNav = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" className='adminNav'>
        <Nav className="adminNavLinks">
          <Nav.Link className='adminNavLink' as={Link} to="/admin/products">products</Nav.Link>
          <Nav.Link className='adminNavLink' as={Link} to="/admin/products">Features</Nav.Link>
          <Nav.Link className='adminNavLink' as={Link} to="/admin/products">Pricing</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  )
}

export default AdminNav