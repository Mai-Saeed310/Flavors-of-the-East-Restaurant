import React, { useEffect, useState } from 'react'
import Appetizers from "../../Data/Beverages.json"; 
import './Beverages.css';

export default function Beverages() {

  const [beverages, setappetizers] = useState([]);

  useEffect(() => {
    setappetizers(Appetizers); // تحميل البيانات
  }, []);

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">Beverages</h2>
        <div className="row g-4">
          {beverages.map((beverage) => (
            <div className="col-md-4" key={beverage.id}>
              <div className="card h-100 shadow rounded">
                <img
                  src={beverage.image}
                  className="card-img-top img-fixed"
                  alt={beverage.name}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold">
                    {beverage.name}{" "}
                    {beverage.tag && (
                      <span className="badge bg-primary">{beverage.tag}</span>
                    )}
                  </h5>
                  <p className="card-text flex-grow-1">{beverage.description}</p>
                  <p className="fw-bold text-warning fs-5">{beverage.price} SAR</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
