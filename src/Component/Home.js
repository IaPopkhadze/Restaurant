import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import "./home.css";
import Food from "./Food";
import Desert from "./Desserts/Desert";
import Drink from "./Drinks/Drink";
import FoodModal from "./FoodModal";
import Header from "./Header";
import React from 'react'

const Home = () => {
  const [navBar, setNavBarActivation] = useState(" ");
  const [modal, setModal] = useState(false);

  return (
    <Router>
      {modal && <FoodModal modal={modal} setModal={setModal} />}

      <Header />

      <nav className="homeNavigation">
        
        <Link
          onClick={() => setNavBarActivation("food")}
          id={navBar === "food" ? "navbarActivation" : ""}
          className="li"
          to="./"
        >
          Food
        </Link>
        <Link
          className="li"
          onClick={() => setNavBarActivation("desert")}
          id={navBar === "desert" ? "navbarActivation" : ""}
          to="/desert"
        >
          Desert
        </Link>
        <Link
          className="li"
          onClick={() => setNavBarActivation("drink")}
          id={navBar === "drink" ? "navbarActivation" : ""}
          to="/drink"
        >
          Drink
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Food modal={modal} setModal={setModal} />} />

        <Route path="/drink" element={<Drink />} />

        <Route path="/desert" element={<Desert />} />
      </Routes>
    </Router>
  );
};

export default Home;
