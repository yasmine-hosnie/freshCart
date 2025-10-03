/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import style from "./Navbar.module.css";
import logo from "../../assets/images/freshcart-logo.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import { CartContext } from "../../Context/CartContext";

export default function Navbar() {
  let { userData, setUserData } = useContext(UserContext);
  let { cart } = useContext(CartContext);
  let navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  function logOut() {
    localStorage.removeItem("userToken");
    setUserData(null);
    navigate("/Login");
  }

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className={style.navbar}>
        <div className={style.container}>
          {/* Logo */}
          <div className={style.left}>
            <img
              src={logo}
              alt="freshcart-logo"
              className={style.logo}
              onClick={() => navigate("/")}
            />
          </div>

          {/* Links for desktop */}
          {userData && (
            <ul className={`${style.links} ${style.desktopOnly}`}>
              <li>
                <NavLink
                  to=""
                  className={({ isActive }) => (isActive ? style.active : "")}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="brands"
                  className={({ isActive }) => (isActive ? style.active : "")}
                >
                  Brands
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="products"
                  className={({ isActive }) => (isActive ? style.active : "")}
                >
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="categories"
                  className={({ isActive }) => (isActive ? style.active : "")}
                >
                  Categories
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="wishlist"
                  className={({ isActive }) => (isActive ? style.active : "")}
                >
                  Wish List
                </NavLink>
              </li>
            </ul>
          )}

          {/* Right side */}
          <ul className={`${style.authLinks} ${style.desktopOnly}`}>
            {userData ? (
              <>
                <li>
                  <NavLink to="cart" className={style.cart}>
                    <i className="fa-solid fa-cart-shopping"></i>
                    <span className={style.cartCount}>
                      {cart?.data?.products?.length || 0}
                    </span>
                  </NavLink>
                </li>
                <li onClick={() => logOut()} className={style.logout}>
                  Logout
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink
                    to="register"
                    className={({ isActive }) => (isActive ? style.active : "")}
                  >
                    Register
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="login"
                    className={({ isActive }) => (isActive ? style.active : "")}
                  >
                    Login
                  </NavLink>
                </li>
              </>
            )}
            <li className={style.social}>
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-youtube"></i>
              <i className="fab fa-twitter"></i>
            </li>
          </ul>

          {/* Burger Icon */}
          <button
            className={`${style.burger} ${menuOpen ? style.open : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`${style.mobileMenu} ${menuOpen ? style.show : ""}`}>
        <button className={style.closeBtn} onClick={closeMenu}>
          ✕
        </button>
        <ul className={style.mobileLinks}>
          {userData && (
            <>
              <li>
                <NavLink
                  to=""
                  className={({ isActive }) => (isActive ? style.active : "")}
                  onClick={closeMenu}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="brands"
                  className={({ isActive }) => (isActive ? style.active : "")}
                  onClick={closeMenu}
                >
                  Brands
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="products"
                  className={({ isActive }) => (isActive ? style.active : "")}
                  onClick={closeMenu}
                >
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="categories"
                  className={({ isActive }) => (isActive ? style.active : "")}
                  onClick={closeMenu}
                >
                  Categories
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="wishlist"
                  className={({ isActive }) => (isActive ? style.active : "")}
                  onClick={closeMenu}
                >
                  Wish List
                </NavLink>
              </li>
            </>
          )}
          {userData ? (
            <>
              <li>
                <NavLink to="cart" className={style.cart} onClick={closeMenu}>
                  <i className="fa-solid fa-cart-shopping"></i>
                  <span className={style.cartCount}>
                    {cart?.data?.products?.length || 0}
                  </span>
                </NavLink>
              </li>
              <li
                onClick={() => {
                  logOut();
                  closeMenu();
                }}
              >
                Logout
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="register" onClick={closeMenu}>
                  Register
                </NavLink>
              </li>
              <li>
                <NavLink to="login" onClick={closeMenu}>
                  Login
                </NavLink>
              </li>
            </>
          )}
          <li className={style.socialMobile}>
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-youtube"></i>
            <i className="fab fa-twitter"></i>
          </li>
        </ul>
      </div>
      {menuOpen && <div className={style.overlay} onClick={closeMenu} />}
    </>
  );
}
