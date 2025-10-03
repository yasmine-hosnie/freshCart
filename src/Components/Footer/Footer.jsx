import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/freshcart-logo.svg";
import style from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.topSection}>
        {/* Logo + About */}
        <div>
          <img src={logo} alt="FreshCart Logo" width={140} className="mb-4" />
          <p>
            FreshCart is your go-to eCommerce platform for groceries, fashion,
            and more. Shop smarter, faster, and fresher every day.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/brands">Brands</Link>
            </li>
            <li>
              <Link to="/categories">Categories</Link>
            </li>
            <li>
              <Link to="/wishlist">Wish List</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3>Customer Support</h3>
          <ul>
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">Shipping & Delivery</a>
            </li>
            <li>
              <a href="#">Returns & Refunds</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3>Follow Us</h3>
          <div className={style.socials}>
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className={`${style.bottomBar} text-center py-4 bg-gray-50 border-t border-gray-200`}
      >
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} FreshCart. All rights reserved. Designed
          by{" "}
          <a
            href="https://github.com/yasmine-hosnie"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-semibold hover:text-blue-800 hover:underline transition"
          >
            Yasmine Hosnie
          </a>
        </p>
      </div>
    </footer>
  );
}
