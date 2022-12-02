import React from "react";
import "./drinks.css";
import { GiWineBottle } from "react-icons/gi";
import { FaGlassMartiniAlt } from "react-icons/fa";
import { ImGlass } from "react-icons/im";
import Restaurant from "./drinksImages/restaurant.jpg";
const DrinkSection2 = () => {
  return (
    <div className="drinkSection2">
      <div className="section2TopContent">
        <h1>About our Drinks</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
          consequuntur cupiditate voluptatum temporibus minima vitae nulla quam
          alias quibusdam vero unde ab magni tenetur quo, sed laudantium quia
          ratione voluptas.
        </p>
      </div>

      <div className="drinkSection2ThreeBoxes">
        <div className="drinkSection2ThreeBoxes-1">
          <div className="drinkSection2ThreeBoxes-1-icon">
            <GiWineBottle />
          </div>
          <h2>Feature #1</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo ea
            eius architecto animi praesentium provident voluptates placeat velit
            recusandae cum dolores aut quibusdam earum vel quod hic harum, lorem
            lorem nostrum minus.
          </p>
          <p>Get started</p>
        </div>
        <div className="drinkSection2ThreeBoxes-1 section2SecondBox">
          <div className="drinkSection2ThreeBoxes-1-icon section2SecondIcon">
            <FaGlassMartiniAlt />
          </div>
          <h2>Feature #1</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo ea
            eius architecto animi praesentium provident voluptates placeat velit
            recusandae cum dolores aut quibusdam earum vel quod hic harum, lorem
            lorem nostrum minus.
          </p>
          <p>Get started</p>
        </div>
        <div className="drinkSection2ThreeBoxes-1">
          <div className="drinkSection2ThreeBoxes-1-icon">
            <ImGlass />
          </div>
          <h2>Feature #1</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo ea
            eius architecto animi praesentium provident voluptates placeat velit
            recusandae cum dolores aut quibusdam earum vel quod hic harum, lorem
            lorem nostrum minus.
          </p>
          <p>Get started</p>
        </div>
      </div>

      <div className="justContent">
        <h2>About our Restaourant</h2>
        <p  style={{width:'70%', margin:'auto'}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa esse
          recusandae veritatis voluptate iusto impedit error, reprehenderit
          nulla! Magnam maxime, aspernatur dolores, quisquam velit, neque
          eligendi delectus quod omnis aliquid aperiam voluptatum impedit
          quaerat quidem tempora? Doloremque, ipsa nihil debitis enim, quibusdam
          sed error itaque incidunt nesciunt neque vel pariatur?
        </p>
        <div className="textPicture">
          <div className="textPicture-1">
    
            <img src={Restaurant} />
          </div>
          <div className="textPicture-2">
            <h2>Lorem ipsum dolor sit amet consectetur</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto,
              quia quas amet nisi qui facere tempore aspernatur, dolor,
              molestiae fugit ducimus consequuntur! Enim vitae ut libero
              deleniti. Commodi, voluptas ea.
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default DrinkSection2;
