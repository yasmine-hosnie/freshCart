import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Loading from "../Loading/Loading";
import { Link } from "react-router-dom";

export default function Brands() {
  function getBrands() {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/brands`);
  }

  let { data, isLoading } = useQuery({
    queryKey: ["Brands"],
    queryFn: getBrands,
    select: (data) => data?.data.data,
  });

  return (
    <>
      {!isLoading ? (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-14 px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-10">
            {data.map((brand, index) => (
              <Link to={`/brands/${brand.name}`} key={index}>
                <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 p-8 flex flex-col items-center justify-center hover:-translate-y-3">
                  {/* صورة البراند */}
                  <div className="w-32 h-32 flex items-center justify-center mb-6 rounded-full bg-gradient-to-br from-gray-100 to-gray-50 group-hover:from-indigo-50 group-hover:to-purple-50 transition-all duration-500">
                    <img
                      src={brand.image}
                      alt={brand.name}
                      className="max-h-20 object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  {/* اسم البراند */}
                  <h3 className="text-base md:text-lg font-semibold text-gray-700 group-hover:text-indigo-600 transition">
                    {brand.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center min-h-screen">
          <Loading />
        </div>
      )}
    </>
  );
}
