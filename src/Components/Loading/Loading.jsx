/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import style from "./Loading.module.css";
import { RotatingLines } from "react-loader-spinner";

export default function Loading() {
  return (
    <>
      <RotatingLines
        visible={true}
        height="96"
        width="96"
        color="grey"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </>
  );
}
