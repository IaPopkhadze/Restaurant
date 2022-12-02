import React from "react";
import LastCake1 from "./dessertImages/lastCake1.webp";
import LastCake2 from "./dessertImages/lastCake2.jpg";

const DessertSection4 = () => {
  return (
    <div className="dessertSection5">
        <div className="section5Line"></div>
      <h1>About our Dessert</h1>
      <div className="section5Container">
        <div className="section5Content">
          <h2>Best Desserts in our Restaurant</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi,
            nisi! Sapiente quas optio autem. Animi quas, quis nemo provident
          
            tempore dolorem laborum.
          </p>
        </div>
        <div className="section5Img">
            <div className="lastCake1"><img src={LastCake1} alt="" /></div>
        <img className="lastCake2" src={LastCake2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default DessertSection4;
