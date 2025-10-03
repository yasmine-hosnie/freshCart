import React from "react";
import style from "./NotFound.module.css";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <h1 className={style.errorCode}>404</h1>
        <h2 className={style.title}>Oops! Page Not Found</h2>
        <p className={style.description}>
          Looks like the page you’re trying to visit doesn’t exist. Don’t worry,
          you can head back to the homepage and continue shopping 🛒
        </p>

        <Link to="/" className={style.homeBtn}>
          Back to Home
        </Link>
      </div>
    </div>
  );
}
