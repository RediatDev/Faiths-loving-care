import React from "react";
import "./Slider";
import { Carousel} from "react-bootstrap";
import sliderOne from '../../image/imagecollecion/img3-min.jpg'
import sliderTwo from  '../../image/imagecollecion/img4-min.jpg'
import sliderThree from  '../../image/imagecollecion/img7-min.jpg'
import sliderFour from  '../../image/imagecollecion/img2-min.png'
import sliderFive from  '../../image/imagecollecion/img12-min.jpg'
import './Slider.css'
function Slider() {
  return (
      <div className="d-none d-md-block">
        <h1 className="text-center my-2 faith">Faith's Loving Care</h1>
           <h5 className="text-dark text-center faith">Caregivers You Can Trust</h5>
      <Carousel className="container carousel-fade w-75  mt-1" >
        <Carousel.Item interval={2000} className="bg-dark Carousel">
          <img className="img1 w-100" src={sliderOne}  alt="adult family home" />
        </Carousel.Item>
        <Carousel.Item interval={2000} className="bg-dark Carousel">
          <img className="img1 w-100 " src={sliderTwo}  alt="adult family home" />
        </Carousel.Item>
         <Carousel.Item interval={2000} className="bg-dark Carousel">
          <img className="img1 w-100 " src={sliderThree}  alt="adult family home" />
        </Carousel.Item>
        <Carousel.Item interval={2000} className="bg-dark Carousel">
          <img className="img1 w-100 " src={sliderFour}  alt="adult family home" />
        </Carousel.Item>
        <Carousel.Item interval={2000} className="bg-dark Carousel">
          <img className="img1 w-100 " src={sliderFive}  alt="adult family home" />
        </Carousel.Item>
      </Carousel>
      </div>
  );
}

export default Slider;
