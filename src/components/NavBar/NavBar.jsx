import React from 'react'
import './NavBar.css';
import '@fortawesome/fontawesome-free/js/all.min.js';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg text-black bg-warning fixed-top">
        <div className="container">
          {/* لوجو المطعم */}
          <Link className="navbar-brand fw-bold brand-black" to="/">
            <i className="fa-solid fa-utensils me-2"></i>
            Flavors of the East Restaurant
          </Link>

          {/* زرار القائمة للموبايل */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* روابط القائمة */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                {/* for guide user to the main page  */}
                  <a className="nav-link" href="/home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>

              {/* Dropdown Menu */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Menu
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/main-dishes">Main Dishes</Link></li>
                  <li><Link className="dropdown-item" to="/appetizers">Appetizers</Link></li>
                  <li><Link className="dropdown-item" to="/beverages">Drinks</Link></li>
                </ul>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/offers">Offers</Link>
              </li>
             <li className="nav-item">
             <a className="nav-link" href="#contact">Contact</a>
             </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
