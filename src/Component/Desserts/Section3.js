import "./dessert.css";
import React from 'react'
import Waffle from "./dessertImages/waffle.jpg";
import Pancake from "./dessertImages/pancake1.jpg";
import { GiCakeSlice } from "react-icons/gi";
const DessertSection3 = () => {
  return (
    <div className="dessertSection3">
      <div className="cakeLine"></div>
      <div className="section3Content">
        <div className="section3List">
          <ul>
            <li>
              <GiCakeSlice /> item 1 - Baked Flourless Cake
            </li>
            <li>
              {" "}
              <GiCakeSlice /> item 2 - Unbaked Flourless Cake
            </li>
            <li>
              {" "}
              <GiCakeSlice /> item 3 - Red Velvet Cake
            </li>
            <li>
              {" "}
              <GiCakeSlice /> item 4 - Angel food cake
            </li>
            <li>
              {" "}
              <GiCakeSlice /> item 5 - Genoise cake
            </li>
          </ul>
        </div>

        <div className="twoCakeBoxes">
          <div className="twoCakeBoxes1">
            <div className="twoCakeBoxes1-1">
              <div>
                <img src={Pancake} alt="" />
              </div>
              <div>
             <p className="pancakeWaffle">  elit. Odit, .  <span>Eos Lorem ipsum dolord </span>consectetur adipisicing elit. Aperiam, praesentium! vero a fuga nihil quo obcaecati corporis cum laudantium officia quam praesentium, ratione nam sint hic eum debitis.</p>
              </div>
            </div>
          </div>

          <div className="twoCakeBoxes2">
            <div className="twoCakeBoxes1-2">
              <div>
                <img src={Waffle} alt="" />
              </div>
              <div>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, modi nobis inventore assumenda mollitia dicta. Magni explicabo quae iusto blanditiis quam velit vel voluptatem, neque, reiciendis nemo tempore, quasi pariatur.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section4LastLines"></div>
    </div>
  );
};

export default DessertSection3;
