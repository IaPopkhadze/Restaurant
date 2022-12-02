import "./dessert.css";
import React from 'react'
import Dessert6 from "./dessertImages/dessert6.jpg";
import Dessert10 from "./dessertImages/dessert10.jpg";

const DessertSection2 = () => {
  return (
    <div className="dessertSection2">
      <div className="dessertSection2-1">
        <h1>Most Popular</h1>
        <div className="imgContent">
          <div className="onlyImg">
            <img src={Dessert6} alt="" />
          </div>
          <p className="onlyContent">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat et a incidunt quos, repellat fuga tempore sapiente at recusandae eum doloribus maiores fugiat mollitia nemo, fugit tempora rerum vitae eligendi! ipsum dolor sit amet consectetur adipisicing elit. Vitae quas
            soluta sit illum, distinctio sint natus ipsa beatae. Obcaecati
            delectus      ut magnam, esse quod
            
          </p>
        </div>
        <p className="onlyText">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
          facere quae aliquam a, molestias nihil necessitatibus illo, cupiditate
          tempore debitis impedit autem suscipit cumque provident accusantium
          dignissimos dolore architecto fugiat!
        </p>
      </div>
      <div className="dessertSection2-2">

          <img src={Dessert10} alt="" />
      </div>
    </div>
  );
};

export default DessertSection2;
