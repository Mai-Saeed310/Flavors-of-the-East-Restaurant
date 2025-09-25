import React, { useEffect, useState } from 'react'
import OffersData from "../../Data/Offers.json"; 
import './Offers.css';

export default function Offers() {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    setOffers(OffersData); // تحميل البيانات
  }, []);

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">Offers</h2>
        <div className="row g-4">
          {offers.map((offer) => (
            <div className="col-md-4" key={offer.id}>
              <div className="card h-100 shadow rounded">
                <img
                  src={offer.image}
                  className="card-img-top img-fixed"
                  alt={offer.name}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold">
                    {offer.name}{" "}
                    {offer.tag && (
                      <span className="badge bg-primary">{offer.tag}</span>
                    )}
                  </h5>
                  <p className="card-text flex-grow-1">{offer.description}</p>
                  <p className="fw-bold text-warning fs-5">{offer.price} SAR</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
