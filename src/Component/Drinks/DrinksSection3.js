import React from "react";
import "./drinks.css";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { ImYoutube } from "react-icons/im";
import { SiTwitter } from "react-icons/si";

import Cocktail1 from "./drinksImages/cocktail1.jpg";
import Cocktail2 from "./drinksImages/cocktail2.jpg";
import Cocktail3 from "./drinksImages/cocktail3.jpg";
import Cocktail4 from "./drinksImages/cocktail4.jpg";
import Cocktail5 from "./drinksImages/cocktail5.jpg";
import Cocktail6 from "./drinksImages/cocktail6.jpg";

import Smoothie1 from "./drinksImages/smoothie1.jpg";
import Smoothie2 from "./drinksImages/smoothie2.png";
import Smoothie3 from "./drinksImages/smoothie3.jpg";
import Smoothie4 from "./drinksImages/smoothie4.jfif";
import Smoothie5 from "./drinksImages/smoothie5.jpg";
import Smoothie6 from "./drinksImages/smoothie6.jpg";

const DrinkSection3 = () => {
  return (
    <div className="drinkSection3">
      <h1 className="sectionstyle">Most Saled</h1>
      <div className="section3SixBoxes">
        <div className="thirdtBox includingAllBoxes">
          <img src={Cocktail1} alt="" />
        </div>
        <div className="secondBox includingAllBoxes">
          <img src={Cocktail2} alt="" />
        </div>
        <div className="thirdBox includingAllBoxes">
          <img src={Cocktail3} alt="" />
        </div>
        <div className="fifthBox includingAllBoxes">
          <img src={Cocktail4} alt="" />
        </div>
        <div className="sixthBox includingAllBoxes">
          <img src={Cocktail5} alt="" />
        </div>
        <div className="seventhBox includingAllBoxes">
          <img src={Cocktail6} alt="" />
        </div>
      </div>
      <h1 className="sectionstyle">New Smoothies</h1>
      <div className="section3SixBoxes">
        <div className="thirdtBox includingAllBoxes">
          <img src={Smoothie1} alt="" />
        </div>
        <div className="secondBox includingAllBoxes">
          <img src={Smoothie2} alt="" />
        </div>
        <div className="thirdBox includingAllBoxes">
          <img src={Smoothie3} alt="" />
        </div>
        <div className="fifthBox includingAllBoxes">
          <img src={Smoothie4} alt="" />
        </div>

        <div className="seventhBox includingAllBoxes">
          <img src={Smoothie6} alt="" />
        </div>
      </div>
      <div className="drinkSectionFooter">
        <div className="socialMediaIcons">
          <FaFacebookSquare />
          <ImYoutube />
          <AiFillInstagram />
          <SiTwitter />
        </div>
        <div>LOGO</div>
        <div>2022 CopyRight & Protected</div>
      </div>
    </div>
  );
};

export default DrinkSection3;
