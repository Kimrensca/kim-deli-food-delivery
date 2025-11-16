import React, { useContext, useState } from "react";
import "./Navbar/navbar.css";
import { assets } from "../assets/assets.js";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../context/StoreContext.jsx";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");

  const { getTotalCartAmount, token, setToken, loading } = useContext(StoreContext);

  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  // Only calculate total if data is loaded
  const totalAmount = loading ? 0 : getTotalCartAmount();
  const hasCartItems = totalAmount > 0;

  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo} alt="logo" className="logo" />
      </Link>

      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("Home")}
          className={menu === "Home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("Menu")}
          className={menu === "Menu" ? "active" : ""}
        >
          Menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("Mobile-app")}
          className={menu === "Mobile-app" ? "active" : ""}
        >
          Mobile-app
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("Contact us")}
          className={menu === "Contact us" ? "active" : ""}
        >
          Contact us
        </a>
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt="search" />

        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="cart" />
          </Link>
          {/* Show dot only if cart has items and data is loaded */}
          <div className={hasCartItems ? "dot" : ""}></div>
        </div>

        {!token ? (
          <button onClick={() => setShowLogin(true)}>sign in</button>
        ) : (
          <div className="navbar-profile">
            <img src={assets.profile_icon} alt="profile" />
            <ul className="nav-profile-dropdown">
              <li onClick={() => navigate("/myorders")}>
                <img src={assets.bag_icon} alt="" />
                <p>Orders</p>
              </li>
              <hr />
              <li onClick={logOut}>
                <img src={assets.logout_icon} alt="" />
                <p>Logout</p>
              </li>
            </ul>
          </div>
        )}

        {/* Optional: Show total */}
        {loading ? (
          <p className="cart-total">Loading…</p>
        ) : (
          <p className="cart-total">${totalAmount.toFixed(2)}</p>
        )}
      </div>
    </div>
  );
};

export default Navbar;