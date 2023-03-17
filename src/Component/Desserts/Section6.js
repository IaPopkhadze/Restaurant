import React from "react";
import pancake1 from "./dessertImages/section6-1.jpg";
import pancake2 from "./dessertImages/section6-2.jpg";
import pancake3 from "./dessertImages/section6-3.jpg";
const DessertSection6 = () => {
  return (
    <div className="sixthSection"> 
        <div className="section6FirstBox">
            <div className="twoLinesSixSection"></div>
            <h2>Pancakes types in Restaurant</h2>
            <p>Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, amet eveniet exercitationem nihil vero unde laboriosam blanditiis, voluptas non inventore maiores doloremque neque. Aliquid reiciendis quaerat officiis nobis? Repudiandae, molestias.</p>
            <h2>Pancakes types in Restaurant</h2>
            <p>Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, amet eveniet exercitationem nihil vero unde laboriosam blanditiis, voluptas non inventore maiores doloremque neque. Aliquid reiciendis quaerat officiis nobis? Repudiandae, molestias.</p>
        </div>
      <div className="section6SixBoxes">
        <div className="pancakeContent">
          <p >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum iusto atque mollitia sit hic earum suscipit unde sapiente, expedita tenetur.
          </p>
        </div>
        <div className="pancakeIMG">
          <img src={pancake1} alt="" />
        </div>
        <div className="pancakeContent">
          <p >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum iusto atque mollitia sit hic earum suscipit unde sapiente, expedita tenetur.
          </p>
        </div>
        <div className="pancakeIMG">
          <img src={pancake1} alt="" />
        </div>
        <div className="pancakeContent">
          <p >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum iusto atque mollitia sit hic earum suscipit unde sapiente, expedita tenetur.
          </p>
        </div>
        <div className="pancakeIMG">
          <img src={pancake1} alt="" />
        </div>
        
      </div>
    </div>
  );
};

export default DessertSection6;
