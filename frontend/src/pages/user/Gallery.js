import React,{useState} from 'react'
import Navbar from '../../components/Navbar'
import './Gallery.css'
import Footer from '../../components/Footer'
import ImageCard from './ImageCard'
import Menu from "../../API/MenuApi"

const About = () => {
  const [cardMenu, setCardMenu] = useState(Menu);

  const filterItem = (category) => {
    const updatedList = Menu.filter((elem) => {
      return elem.category === category;
    });
    setCardMenu(updatedList);
  }; 

  return ( 
    <>
      
      <div className='container-gallery'>
      <Navbar />
       
       <div className='container-buttons'>
          {/* <button className='gallery-btn' onClick={() => filterItem("Beache")}>Beaches</button> */}
          <button className='gallery-btn' onClick={() => filterItem("breakfast")}>Breakfast</button>
          <button className='gallery-btn' onClick={() => filterItem("lunch")}>Lunch</button>
          <button className='gallery-btn' onClick={() => filterItem("dinner")}>Dinner</button>
          {/* <button className='gallery-btn' onClick={() => filterItem("family photos")}>Family Photos</button> */}
          <button className='gallery-btn' onClick={() => setCardMenu(Menu)}>All</button>
       </div>
       
       <div className="container-Gallery">
        <div className="row " style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
          <ImageCard Card={cardMenu} />
        </div>
      </div>

        <Footer />
      </div>
      
    </>
  )
}

export default About