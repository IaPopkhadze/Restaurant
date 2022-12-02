import "./foodDrinkDesert.css";
import React from 'react'
import Xachapuri2 from "./images/xachapuri2.jpg";
import Xachapuri3 from "./images/xachapuri3.jpg";
import Xachapuri4 from "./images/xachapuri4.jpg";

import XachapuriLogo from "./images/xachapuriLogo.jpg";
import { IoMdClose } from "react-icons/io";
import { IoMdCheckmark } from "react-icons/io";
import {useState} from 'react'
const Xachapuri = () => {
  const [xachapuri1, setXachapuri1]=useState(false)
  const [xachapuri2, setXachapuri2]=useState(false)
  const [xachapuri3, setXachapuri3]=useState(false)

  return (
    <div className="xachapuriContainer">
      <div className="burgerLine">
        <div className="leftline">
          <div className="burgerline1"></div>
          <div className="burgerline2"></div>
        </div>

        <img style={{ width: "100px" }} src={XachapuriLogo} alt="" />
        <div className="rightline">
          <div className="burgerline1"></div>
          <div className="burgerline2"></div>
        </div>
      </div>

   
      <div className="xachapuriOverlay">
        <div className="xachapuriCard">
          <div className="xachapuriImg">
            <img src={Xachapuri2} alt="" />
          </div>
          <h1>Xachapuri 1</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
            aliquam.
          </p>{" "}
          <button onClick={()=>setXachapuri1(true) }  className={xachapuri1 ? 'hiddenButton': ''}>Show me more</button>
         
         {xachapuri1 && <div className="xachapuriList">
           <ul>
             <li><IoMdCheckmark/> Lorem, ipsum dolor. Lorem, ipsum .</li>
             <li><IoMdCheckmark/> Lorem ipsum dolor sit.</li>
             <li><IoMdCheckmark/> Lorem, ipsum.</li>
             <li><IoMdClose/> Lorem ipsum  lorem adipisicing.</li>
             <li><IoMdCheckmark/> Lorem ipsum dolor sit.</li>
             <li><IoMdCheckmark/> Lorem ipsum Lorem, ipsum. dolor sit.</li>
           </ul>
           <button className="hideBtn" onClick={()=>setXachapuri1(false)}>Hide</button>
         </div> }
        </div>
        <div className="xachapuriCard">
          <div className="xachapuriImg">
            <img src={Xachapuri3} alt="" />
          </div>
          <h1>Xachapuri 2</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
            aliquam.
          </p>{" "}
          <button onClick={()=>setXachapuri2(true) }  className={xachapuri2 ? 'hiddenButton': ''}>Show me more</button>
         
         {xachapuri2 && <div className="xachapuriList">
           <ul>
             <li><IoMdCheckmark/>Lorem, ipsum. Lorem ipsum dolor sit.</li>
             <li><IoMdCheckmark/> Lorem, ipsum dolor.</li>
             <li><IoMdClose/> Lorem, ipsum.</li>
             <li><IoMdClose/> Lorem ipsum dolor sit.</li>
             <li><IoMdCheckmark/> Lorem, ipsum Lorem, ipsum. dolor.</li>
             <li><IoMdCheckmark/> Lorem, ipsum dolor.</li>
           </ul>
           <button className="hideBtn" onClick={()=>setXachapuri2(false)}>Hide</button>
         </div> }
        </div>
        <div className="xachapuriCard">
          <div className="xachapuriImg">
            <img src={Xachapuri4} alt="" />
          </div>
          <h1>Xachapuri 3</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
            aliquam.
          </p>{" "}
          <button onClick={()=>setXachapuri3(true) }  className={xachapuri3 ? 'hiddenButton': ''}>Show me more</button>
         
          {xachapuri3 && <div className="xachapuriList">
            <ul>
              <li><IoMdClose/> Lorem ipsum dolor sit. lorem</li>
              <li><IoMdCheckmark/> Lorem, ipsum dolor.</li>
              <li> <IoMdClose/> Lorem ipsum dolor sit .</li>
              <li><IoMdCheckmark/> Lorem, ipsum dolor. Lorem, ipsum .</li>
              <li> <IoMdCheckmark/> Lorem ipsum dolor Lorem, ipsum. sit.</li>
              <li><IoMdClose/> Lorem ipsum dolor sit.</li>
            </ul>
            <button className="hideBtn" onClick={()=>setXachapuri3(false)}>Hide</button>
          </div> }
         
        </div>
      </div>
    </div>
  );
};

export default Xachapuri;
