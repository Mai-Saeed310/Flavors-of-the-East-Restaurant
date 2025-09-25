import React from "react";
import "./ContactUs.css";

export default function ContactUs() {
  return (
    <section className="py-5 bg-light" id="contact">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">Contact Us</h2>
        <div className="row g-4">
          
          {/* Form */}
          <div className="col-md-6">
            <div className="card shadow rounded p-4">
              <h4 className="fw-bold mb-3">Send us a message</h4>
              <form>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input type="text" className="form-control" placeholder="Enter your name" required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" placeholder="Enter your email" required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea className="form-control" rows="4" placeholder="Write your message..." required></textarea>
                </div>
                <button type="submit" className="btn btn-warning fw-bold">Send</button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-md-6">
            <div className="card shadow rounded p-4">
              <h4 className="fw-bold mb-3">Get in touch</h4>
              <p><i className="fa-solid fa-location-dot text-warning"></i> Jeddah, Saudi Arabia</p>
              <p><i className="fa-solid fa-phone text-warning"></i> +966 123 456 789</p>
              <p><i className="fa-solid fa-envelope text-warning"></i> info@flavorsoftheeast.com</p>

              {/* Optional: Google Map */}
              <div className="mt-3">
                <iframe
                  title="map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.05400729693!2d46.67529631500243!3d24.713551984117894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f0f4d8c89f2a7%3A0x8b681b6c4a3f0a77!2sSaudi%20Arabia!5e0!3m2!1sen!2seg!4v1673949012345!5m2!1sen!2seg"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
