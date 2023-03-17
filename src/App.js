import Home from "./Component/Home";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./Component/Header/Header";
import FoodModal from "./Component/FoodModal";
import Food from "./Component/Food";
import Drink from "./Component/Drinks/Drink";
import Desert from "./Component/Desserts/Desert";

function App() {

  const [navBar, setNavBarActivation] = useState(" ");
  const [modal, setModal] = useState(false);

  return (
    <Router>
      <div>
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
      </div>
    </Router>
  );
}

export default App;
