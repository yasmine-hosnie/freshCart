/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import style from "./ProtectedRoute.module.css";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  return (
    <>
      {localStorage.getItem("userToken") ? children : <Navigate to="/Login" />}
    </>
  );
}
