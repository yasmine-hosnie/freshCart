import React, { useContext, useEffect, useState } from "react";
import style from "./ProductDetails.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";
import Loading from "../Loading/Loading";
import { CartContext } from "../../Context/CartContext";

export default function ProductDetails() {
  let { addProductToCart } = useContext(CartContext);

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  let { id } = useParams();
  const [productDetails, setProductDetails] = useState({});

  async function getProductDetails(id) {
    let { data } = await axios.get(
      `https://ecommerce.routemisr.com/api/v1/products/${id}`
    );
    setProductDetails(data.data);
  }

  useEffect(() => {
    getProductDetails(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {productDetails.id ? (
        <div className={style.detailsWrapper}>
          {/* صور المنتج */}
          <div className={style.imageWrapper}>
            {productDetails.images?.length > 1 ? (
              <Slider {...settings}>
                {productDetails.images.map((img, index) => (
                  <div key={index}>
                    <img
                      className={style.image}
                      src={img}
                      alt={productDetails.title}
                    />
                  </div>
                ))}
              </Slider>
            ) : (
              <img
                className={style.image}
                src={productDetails.imageCover}
                alt={productDetails.title}
              />
            )}
          </div>

          {/* تفاصيل المنتج */}
          <div className={style.infoWrapper}>
            <h2 className={style.title}>{productDetails.title}</h2>
            <p className={style.description}>{productDetails.description}</p>

            <div className={style.priceRating}>
              <h3 className={style.price}>{productDetails.price} EGP</h3>
              <h3 className={style.rating}>
                <i className="fas fa-star"></i> {productDetails.ratingsAverage}
              </h3>
            </div>

            <button
              onClick={() => addProductToCart(id)}
              className={style.cartBtn}
            >
              Add To Cart
            </button>
          </div>
        </div>
      ) : (
        <div className="h-100 flex items-center justify-center">
          <Loading />
        </div>
      )}
    </>
  );
}
