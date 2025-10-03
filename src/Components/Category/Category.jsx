import React from "react";
import style from "./Category.module.css";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Loading from "../Loading/Loading";
import { Link } from "react-router-dom";

export default function Category() {
  function getCategories() {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/categories`);
  }

  let { data, isLoading } = useQuery({
    queryKey: ["Categories"],
    queryFn: getCategories,
    select: (data) => data?.data?.data,
  });

  return (
    <>
      {!isLoading ? (
        <div className={style.categoriesGrid}>
          {data.map((cat, index) => (
            <Link to={`/categories/${cat.name}`} key={index}>
              <div className={style.categoryCard}>
                <div className={style.imageWrapper}>
                  <img src={cat.image} alt={cat.name} />
                </div>
                <h3>{cat.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
