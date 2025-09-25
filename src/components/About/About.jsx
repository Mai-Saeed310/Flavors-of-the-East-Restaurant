import React from 'react'

export default function About() {
  return (
    <>
    
      {/* About Us Section */}
     <section id="about" className="py-5 bg-light text-center">
        <div className="container">
          <h2 className="fw-bold mb-4">About Us</h2>
          <p className="mb-5">
            Founded in 2010, Flavors of the East has been bringing authentic Eastern cuisine
            with a modern twist. Our chefs are passionate about using fresh ingredients to 
            create unforgettable dishes.
          </p>

          {/* Bootstrap Carousel with 3 images per slide */}
          <div id="aboutCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">

              {/* Slide 1 */}
              <div className="carousel-item active">
                <div className="d-flex justify-content-center gap-3">
                  <img src="images/Logo/RXjpg.jpg" className="d-block rounded shadow w-25 img-fixed" alt="Our Staff" />
                  <img src="images/Logo/RX2.jpg" className="d-block rounded shadow w-25 img-fixed" alt="Signature Dish" />
                  <img src="images/Logo/RX3.jpg" className="d-block rounded shadow w-25 img-fixed" alt="Restaurant Interior" />
                </div>
              </div>

              {/* Slide 2 */}
              <div className="carousel-item">
                <div className="d-flex justify-content-center gap-3">
                  <img src="images/Logo/RX-Staff.png" className="d-block rounded shadow w-25 img-fixed" alt="Dish 1" />
                  <img src="images/Logo/RX4.jpg" className="d-block rounded shadow w-25 img-fixed" alt="Dish 2" />
                  <img src="images/Logo/RX5.jpg" className="d-block rounded shadow w-25 img-fixed" alt="Dish 3" />
                </div>
              </div>

              {/* Slide 3 */}
              <div className="carousel-item">
                <div className="d-flex justify-content-center gap-3">
                  <img src="images/Logo/RX6.jpg" className="d-block rounded shadow w-25 img-fixed" alt="Dish 4" />
                  <img src="images/Logo/RX7.jpg" className="d-block rounded shadow w-25 img-fixed" alt="Dish 5" />
                  <img src="images/Logo/RX8.jpeg" className="d-block rounded shadow w-25 img-fixed" alt="Dish 6" />
                </div>
              </div>

            </div>

            {/* Controls */}
            <button className="carousel-control-prev color-black" type="button" data-bs-target="#aboutCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#aboutCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
