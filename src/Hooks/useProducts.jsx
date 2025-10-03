import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

export default function useProducts() {
  function getProducts() {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/products`);
  }
  let response = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
    // gcTime:3000,
    // staleTime:20000,
    // cacheTime:5000,
    // refetchOnWindowFocus:true,
    // refetchOnMount:true,
    // refetchInterval:10000,
    // refetchIntervalInBackground:true,
    // enabled:true,
    // onSuccess: (data) => {
    //   console.log("data fe onSuccess",data);
    // },
    // onError: (error) => {
    //   console.log("error fe onError", error);
    // },
    select: (data) => data?.data?.data,
  });
  return response;
}
