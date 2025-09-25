import React, { useEffect, useState } from 'react';
import Appetizers from "../../Data/Appetizers.json"; 
import './Appetizers.css';

export default function AppetizersList() {
  const [appetizers, setappetizers] = useState([]);

  useEffect(() => {
    setappetizers(Appetizers); // تحميل البيانات
  }, []);

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">Appetizers</h2>
        <div className="row g-4">
          {appetizers.map((appetizer) => (
            <div className="col-md-4" key={appetizer.id}>
              <div className="card h-100 shadow rounded">
                <img
                  src={appetizer.image}
                  className="card-img-top img-fixed"
                  alt={appetizer.name}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold">
                    {appetizer.name}{" "}
                    {appetizer.tag && (
                      <span className="badge bg-primary">{appetizer.tag}</span>
                    )}
                  </h5>
                  <p className="card-text flex-grow-1">{appetizer.description}</p>
                  <p className="fw-bold text-warning fs-5">{appetizer.price} SAR</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
