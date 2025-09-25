import React, { useEffect, useState } from 'react'
import Maindishes from "../../Data/Maindishes.json"; 
import './MainDishes.css';

export default function MainDishes() {
  const [dishes, setDishes] = useState([]);

useEffect(() => {
    setDishes(Maindishes); // تحميل البيانات
  }, []);

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">Main Dishes</h2>
        <div className="row g-4">
          {dishes.map((dish) => (
            <div className="col-md-4" key={dish.id}>
              <div className="card h-100 shadow rounded">
                <img
                  src={dish.image}
                  className="card-img-top img-fixed"
                  alt={dish.name}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold">{dish.name} <span className="badge bg-primary">{dish.tag}</span></h5>
                  <p className="card-text flex-grow-1">{dish.description}</p>
                  <p className="fw-bold text-warning fs-5">{dish.price} SAR</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
