import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
   <>
     <nav className="navbar navbar-expand-lg sticky-top " style={{backgroundColor: '#0094FF'}}>
    <div className="container-fluid">
        <NavLink to='/user' className="navbar-brand" aria-current="page"><h5 className="name">PCCoE Retsurant</h5></NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav  mb-2 mb-lg-0 ms-auto">
          <li className="nav-item">
          <NavLink to='/user' className="nav-link" aria-current="page"> Home</NavLink>
          </li>
          <li className="nav-item">
          <NavLink to='/userMenu' className="nav-link">Menu</NavLink>
          </li>
          <li className="nav-item">
          <NavLink to='/gallery' className="nav-link">Gallery</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
   </>
  )
}

export default Navbar