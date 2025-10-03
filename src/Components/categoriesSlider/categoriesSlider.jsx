import React, { useEffect, useState } from "react";
import style from "./CategoriesSlider.module.css";
import Slider from "react-slick";
import axios from "axios";

export default function CategoriesSlider() {
  const [categories, setCategories] = useState([]);

  var settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2200,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 5 } },
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  async function getCategories() {
    let { data } = await axios.get(
      `https://ecommerce.routemisr.com/api/v1/categories`
    );
    setCategories(data.data);
  }

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className={style.sliderWrapper}>
      <Slider {...settings}>
        {categories.map((cat, index) => (
          <div key={index} className={style.cardWrapper}>
            <div className={style.card}>
              <img className={style.image} src={cat.image} alt={cat.name} />
              <h3 className={style.catName}>{cat.name}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
