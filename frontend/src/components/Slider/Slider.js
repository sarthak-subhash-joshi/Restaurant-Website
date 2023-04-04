import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Slider.css'
import React, { Component} from "react";
import Slider from "react-slick";
import Testimonial from '../API/Testimonial-API'

export default class Responsive extends Component {

  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 5000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]  
    };
    return (
     <>
     <div id="Activities" style={{marginBottom:'20px'}} ></div>
      <div className="slick-container" data-aos="fade-up">
         <div className="testimonial-heading">
         <h2> ART CIRCLE ACTIVITIES</h2>
         </div>
        <Slider {...settings}>
        {Testimonial.map((curElem)=>{
        return(
          <div className="card" key={curElem.id}>
  <div className='card-top-part'>
    <img src={curElem.image} className="card-img-top" alt="..."/>
  </div>
  <div className="card-body">
       <h5 class="card-title">{curElem.name}</h5>
       <p className="card-text" >{curElem.review}</p>
  </div>
</div>
        );
       })}
        </Slider>
      </div>
      </>
    );
    
  }
}
