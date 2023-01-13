import React from "react";
import "./testimonia.css";
import AVTAR1 from "../../assets/avatar1.jpg";
import AVTAR2 from "../../assets/avatar2.jpg";
import AVTAR3 from "../../assets/avatar3.jpg";
import AVTAR4 from "../../assets/avatar4.png";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTAR1,
    name: "Client 1",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id molliti orem ipsum dolor sit amet consectetur orem ipsum dolor sit amet consectetur adipisicing elit. Id mollitiadipisicing elit. Id molliti",
  },
  {
    avatar: AVTAR2,
    name: "Client 2",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id molliti Lorem ipsum dolororem ipsum dolor sit amet consectetur adipisicing elit. Id molliti sit amet consectetur adipisicing elit. Id molliti",
  },
  {
    avatar: AVTAR3,
    name: "Client 3",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id molliti Lorem orem ipsum dolor sit amet consectetur adipisicing elit. Id mollitiipsum dolor sit amet consectetur adipisicing elit. Id molliti",
  },
  {
    avatar: AVTAR4,
    name: "Client 4",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id molliti Loremorem ipsum dolor sit amet consectetur adipisicing elit. Id molliti ipsum dolor sit amet consectetur adipisicing elit. Id molliti",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonioals">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Avatar" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
