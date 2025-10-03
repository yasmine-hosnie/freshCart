import React from "react";
import Slider from "react-slick";
import style from "./MainSlider.module.css";

import slide1 from "../../assets/images/img1.jpg";
import slide2 from "../../assets/images/img2.jpg";
import slide3 from "../../assets/images/img3.jpg";
import slide4 from "../../assets/images/img4.jpg";
import slide5 from "../../assets/images/img5.jpg";
import slide6 from "../../assets/images/img6.jpg";

export default function MainSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2500,
    appendDots: (dots) => (
      <div>
        <ul className={style.dots}> {dots} </ul>
      </div>
    ),
  };

  return (
    <div className={style.sliderWrapper}>
      <div className={style.mainSlider}>
        <Slider {...settings}>
          <div>
            <img className={style.mainImage} src={slide1} alt="slide1" />
          </div>
          <div>
            <img className={style.mainImage} src={slide2} alt="slide2" />
          </div>
          <div>
            <img className={style.mainImage} src={slide3} alt="slide3" />
          </div>
          <div>
            <img className={style.mainImage} src={slide4} alt="slide4" />
          </div>
        </Slider>
      </div>

      <div className={style.sideImages}>
        <img className={style.sideImage} src={slide5} alt="slide5" />
        <img className={style.sideImage} src={slide6} alt="slide6" />
      </div>
    </div>
  );
}
