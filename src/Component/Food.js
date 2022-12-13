import "./foodDrinkDesert.css";
import Axios from "axios";
import React from 'react'
import { useState, useEffect } from "react";
import Burger from "./Burger";
import Khinkali from "./Khinkali";

import Xachapuri from "./Xachapuri";

const Food = ({ setModal }) => {
  const [foods, setFoods] = useState("");
  const API_ID = 77851863;
  const API_KEY = "3446188b835f9b2fe6aa3279a6a4e4e0";
  const URL = `https://api.edamam.com/search?q=chicken&app_id=${API_ID}&app_key=${API_KEY}&from=0&to=6&calories=591-722&health=alcohol-free`;

  const getData = async () => {
    const result = await Axios.get(URL);
    setFoods(result.data.hits);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="foodContainer">
        <div className="foodContainer-1">
          {foods &&
            foods.map((element, index) => {
              return (
                <div key={index} className="card">
                  <div className="imageContainer">
                    <img src={element.recipe.image} alt="" />
                  </div>
                  <div className="contentContainer">
                    <h3>{element.recipe.label}</h3>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="foodContainer-2">
          <h1>
            Best Restaurant in Georg<span>ia</span>{" "}
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
            architecto nostrum exercitationem dicta, maiores, dignissimos itaque
            quia iste aperiam quod tempora recusandae! Quae, totam sunt, ducimus
            eius voluptatem tempora dicta aliquam magnam, reiciendis sapiente
            dolorem voluptatum. Sint laboriosam, aperiam eum reprehenderit
            eligendi unde eius magnam cumque facere, similique ipsa alias.{" "}
          </p>
          <button onClick={() => setModal(true)}>Start order</button>
        </div>
      </div>

      <Burger />
      <Khinkali />
      <Xachapuri />
    </>
  );
};

export default Food;
