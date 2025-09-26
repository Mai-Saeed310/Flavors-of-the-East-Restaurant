import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import MainDishes from "./components/MainDished/MainDishes";
import Appetizers from "./components/Appetizers/Appetizers";
import Beverages from "./components/Beverages/Beverages"; 
import Offers from "./components/Offers/Offers";
import About from "./components/About/About";
import ContactUs from "./components/ContactUs/ContactUs";

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main-dishes" element={<MainDishes />} />
        <Route path="/appetizers" element={<Appetizers />} />
        <Route path="/beverages" element={<Beverages />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </>
  );
}
