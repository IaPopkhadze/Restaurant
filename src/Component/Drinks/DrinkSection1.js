import React from "react";
import "./drinks.css";
import DrinkBackground from "./drinksImages/cocktailBackground.jpg";
const DrinkSection1 = () => {
  return (
    <div>
      <div className="drinkSection1">
        <img src={DrinkBackground} alt="" />

        <div className="drinkSection1Content">
          <h1>It's time to have a drink</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
            eligendi velit dolores laboriosam, doloribus harum perferendis
            pariatur molestiae! Hic explicabo voluptas tempore iusto tenetur
            quam reiciendis necessitatibus quia, nobis maxime?
          </p>
          <button className="">show me Menu</button>
        </div>
      </div>
    </div>
  );
};

export default DrinkSection1;
