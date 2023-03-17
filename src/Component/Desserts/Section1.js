import "./dessert.css";
import React from 'react'

import Dessert3 from "./dessertImages/dessert3.jpg";
import Dessert4 from "./dessertImages/dessert4.jpg";
import Dessert5 from "./dessertImages/dessert5.jpg";
import Dessert7 from "./dessertImages/dessert7.jpg";
import Dessert8 from "./dessertImages/dessert8.jpg";
import Dessert9 from "./dessertImages/dessert9.jpg";

const DesertSection1 = () => {
  return (
    <div className="desertSectionContainer">
      <div className="dessertContainers">
        <div className="dessertContainers1">
          <h1>THE PERFECT BAKED CAKE EVERYDAY!</h1>
          <p>
            Lorem aliquid quidem quaerat alias quae quibusdam non consequatur
            minima omnis officia, consequuntur Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Iste cupiditate sequi nostrum
            veritatis architecto sunt omnis hic quisquam alias excepturi? eum
            quod ut saepe distinctio consectetur vitae recusandae?
          </p>
        </div>
        <div className="dessertContainers2">
          <img src={Dessert3} alt="" />
        </div>
      </div>
      <div className="welcoming">
        <div className="welcomingContent">
          <h1>WELCOME TO IA'S RESTAURANT</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eos,
            sequi qui, est excepturi nemo odit ullam in, magnam sapiente
            laboriosam
          </p>
        </div>
        <div className="welcomingFourBoxes">
          <div className="boxChild">
            <div className="imgBox">
              <img src={Dessert4} alt="" />
            </div>
            <div className="imgOverlay">
            Strawberry cake
            </div>
          </div>
          <div className="boxChild">
            <div className="imgBox">
              <img src={Dessert8} alt="" />
            </div>
            <div className="imgOverlay">
            Strawberry cake
            </div>
          </div>
          <div className="boxChild">
            <div className="imgBox">
              <img src={Dessert9} alt="" />
            </div>
            <div className="imgOverlay">
            Strawberry cake
            </div>
          
          </div>
     
        </div>
      </div>
    </div>
  );
};

export default DesertSection1;
