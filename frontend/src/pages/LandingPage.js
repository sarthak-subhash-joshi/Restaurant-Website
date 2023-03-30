import React,{useState} from 'react'
import './LandingPage.css'
import { NavLink } from 'react-router-dom'

const LandingPage = () => {

 

  return (
    <>
        <div className="landing-page-main-container">
          <div className='landing-page-top'>
           <h2 >Welcome to <strong>PCCoE</strong> Restaurant</h2>
          </div>

          <div className="landing-page-bottom">
            <div className='row'>
              <div className='col-lg-6 col-xl-6 landing-page-bottom-col'>
                <img src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" alt="" className='landing-page-img-user' />
                <NavLink to='/user'><button type="button" class="btn btn-primary landing-page-btn" >User</button></NavLink>
              </div>
              <div className="col-lg-6 col-xl-6 landing-page-bottom-col">
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtgEBZC2ij3XmYsMkb9D6U5d6h1MBoFSpZ2w&usqp=CAU" alt="" className='landing-page-img-owner' />
                <NavLink to='/owner'><button type="button" class="btn btn-primary landing-page-btn">Owner</button></NavLink>
              </div>
            </div>
          </div>


       

        </div>
    </>
  )
}

export default LandingPage