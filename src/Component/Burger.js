import { useState } from "react";
import React from 'react'
import { GiHamburger } from "react-icons/gi";
import Burger1 from "./images/burger2.png";
import Wave from "./images/wave.svg";
import burgerData from "./burgerData";
import "./foodDrinkDesert.css";

const Burger = () => {
  const [hamburger, setHamburger] = useState("burger1");

  return (
    <div className="BurgerContainer">
      <div className="burgerLine">
        <div className="leftline">
          <div className="burgerline1"></div>
          <div className="burgerline2"></div>
        </div>
        <GiHamburger
          style={{ fontSize: "6rem", color: "383838", padding: "1rem" }}
        />
        <div className="rightline">
          <div className="burgerline1"></div>
          <div className="burgerline2"></div>
        </div>
      </div>
      <div className="burgerContainer">
        <div className="burgerContainer1">
          <img src={Burger1} alt="" />
        </div>
        <div className="burgerContainer2">
          <div className="burgerNavigation">
            <ul>
              <li onClick={() => setHamburger("burger1")}>burger1</li>
              <li onClick={() => setHamburger("burger2")}>burger2</li>
              <li onClick={() => setHamburger("burger3")}>burger3</li>
              <li onClick={() => setHamburger("burger4")}>burger4</li>
              <li onClick={() => setHamburger("burger5")}>burger5</li>
            </ul>
          </div>
          <div className="diferentBurgerContainer">
            <div className="diferentBurgerContainerContent">
              <h1>{burgerData[hamburger].title}</h1>
              <p>{burgerData[hamburger].text}</p>
            </div>

            <img className="burgerimg" src={burgerData[hamburger].image} alt="" />
          </div>
        </div>
      </div>
      <img src={Wave} alt="" className="backgroundWave" />
    </div>
  );
};

export default Burger;
