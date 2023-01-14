import React from 'react'
import Slider from "react-slick";
import "../../styles/slick.css";
import PortfolioSlider from '../portfolioslider/PortfolioSlider';
import { frontend } from "../demodata/myworks";
import { backend } from "../demodata/myworks";
import "../portfolioslider/card.css";

export default function CardSlider() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    // arrows:false,
    // autoplay: true,
    // speed: 20,
    // autoplaySpeed: 20,
    // cssEase: "linear",
    // Add slider responsive media query
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,

          // autoplay: true,
          // speed: 20000,
          // autoplaySpeed: 20,
          // cssEase: "linear",
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 912,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
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
    <>
      <div className='container'>
        <h2 className="portfolio-header">Frontend Development</h2>

        <Slider {...settings}>
          {frontend.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <PortfolioSlider item={item} />
              </React.Fragment>
            );
          })}
        </Slider>
        <br />
        <h2 className="portfolio-header">FullStack Development</h2>
        {/* Add Arrow NAvigations */}
        {/* <button className="previous">PREV</button>
        <button className="next">NEXT</button> */}
        <Slider {...settings}>
          {backend.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <PortfolioSlider item={item} />
              </React.Fragment>
            );
          })}
        </Slider>
        {/* <BasicCard /> */}
      </div>
    </>
  );
}

