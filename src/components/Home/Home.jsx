import React from 'react';
import './Home.css';
import About from '../About/About';
import ContactUs from '../ContactUs/ContactUs';
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero d-flex align-items-center justify-content-center text-center text-white">
        <div className="overlay"></div>
        <div className="content">
          <h1 className="display-3 fw-bold">Flavors of the East</h1>
          <p className="lead mb-4">Authentic Flavors • Fresh Ingredients • Eastern Vibes</p>
          <Link to="/main-dishes" className="btn btn-warning btn-lg me-3">
            View Menu
          </Link>
          <a href="#contact" className="btn btn-outline-light btn-lg">Contact Us</a>
        </div>
      </section>

      {/* قسم About */}
      <section id="about" className="section bg-light">
        <About />
      </section>

      {/* قسم Contact */}
      <section id="contact" className="section">
        <ContactUs />
      </section>
    </>
  );
}
