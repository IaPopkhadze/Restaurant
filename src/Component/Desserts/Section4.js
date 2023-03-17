 import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import img from "./dessertImages/dessert2.jpg";
import slide1 from "./dessertImages/slide1.jpg";
import slide2 from "./dessertImages/slide2.jpg";
import slide3 from "./dessertImages/slide3.jpg";
import slide4 from "./dessertImages/slide4.jfif";
import slide5 from "./dessertImages/slide5.jpg";
import slide6 from "./dessertImages/slide6.jpg";
// import slide7 from "./dessertImages/slide7.jpg.crdownload";
import slide8 from "./dessertImages/slide8.jfif";
export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="section4Slide">
      
        <div className="left">
          <h2 className="slideTitle"> Most popular cake </h2>
          <Slider {...settings}>
            <div>
              <div className="slideBox">
                <img className="imgSlide" src={img} alt="" />
              </div>
            </div>

            <div>
              <div className="slideBox">
                <img className="imgSlide" src={slide6} alt="" />
              </div>
            </div>
            <div>
              <div className="slideBox">
                <img className="imgSlide" src={slide2} alt="" />
              </div>
            </div>
            <div>
              <div className="slideBox">
                <img className="imgSlide" src={slide3} alt="" />
              </div>
            </div>
            <div>
              <div className="slideBox">
                <img className="imgSlide" src={slide4} alt="" />
              </div>
            </div>
            <div>
              <div className="slideBox">
                <img className="imgSlide" src={slide5} alt="" />
              </div>
            </div>
            <div>
              <div className="slideBox">
                <img className="imgSlide" src={slide6} alt="" />
              </div>
            </div>
            <div>
              <div className="slideBox">
                <img className="imgSlide" src={slide1} alt="" />
              </div>
            </div>
          </Slider>
        </div>


        <div className="right">
   <p>Loendis dolore, minima laboriosam illo minus enim,   ut   voluptatum aspernatur earum quae cumque, error mollitia fugiat? Tempore quia magni voluptatibus! Illum accusantium aut, sint qui distinctio reprehenderit natus accusamus aliquam optio magni, quas repellat. Quos, ipsam hic.</p>
        </div>
      </div>
    );
  }
}
