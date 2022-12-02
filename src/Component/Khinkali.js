import "./foodDrinkDesert.css";
import React from 'react'
import Xinkali from "./images/xinkali1.jpg";
import Xink1 from "./images/xink1.jpg";
import Xink2 from "./images/xink2.jpg";
import Xink3 from "./images/xink3.jpg";
import Xink4 from "./images/xink4.jpg";
import Xink5 from "./images/xink5.jpg";
import Xink6 from "./images/xink6.jpeg";
import { useState } from "react";
const Khinkali = () => {
  const [xinkaliAmount1, setXinkaliAmount1]=useState(0);
  const [xinkaliAmount2, setXinkaliAmount2]=useState(0);
  const [xinkaliAmount3, setXinkaliAmount3]=useState(0);
  const [xinkaliAmount4, setXinkaliAmount4]=useState(0);
  const [xinkaliAmount5, setXinkaliAmount5]=useState(0);
  const [xinkaliAmount6, setXinkaliAmount6]=useState(0);


 const decreaseAmount1=()=>{
   if(xinkaliAmount1>=1){
       setXinkaliAmount1(xinkaliAmount1-1);
   }
 }
 const decreaseAmount2=()=>{
  if(xinkaliAmount2>=1){
      setXinkaliAmount2(xinkaliAmount2-1);
  }
}
const decreaseAmount3=()=>{
  if(xinkaliAmount3>=1){
      setXinkaliAmount3(xinkaliAmount3-1);
  }
}
const decreaseAmount4=()=>{
  if(xinkaliAmount4>=1){
      setXinkaliAmount4(xinkaliAmount4-1);
  }
}
const decreaseAmount5=()=>{
  if(xinkaliAmount5>=1){
      setXinkaliAmount5(xinkaliAmount5-1);
  }
}
const decreaseAmount6=()=>{
  if(xinkaliAmount6>=1){
      setXinkaliAmount6(xinkaliAmount6-1);
  }
}

const totalAmount=xinkaliAmount1+xinkaliAmount2+xinkaliAmount3+xinkaliAmount4+xinkaliAmount5+xinkaliAmount6
const totalPrice=(xinkaliAmount1*2)+(xinkaliAmount2*1.5)+(xinkaliAmount3*2.5)+(xinkaliAmount4*3.5)+(xinkaliAmount5*0.5)+(xinkaliAmount6*4)
  return (
    <div>
      <div className="burgerLine">
        <div className="leftline">
          <div className="burgerline1"></div>
          <div className="burgerline2"></div>
        </div>

        <img style={{ width: "200px" }} src={Xinkali} alt="" />
        <div className="rightline">
          <div className="burgerline1"></div>
          <div className="burgerline2"></div>
        </div>
      </div>

      <div className="xinkaliContainer">
        <div className="xinkaliContainer1">
          <div className="xinkaliImage">
            <img src={Xink1} alt="" />
          </div>
          <h1>Khinkali 1</h1>
          <div className="xinkaliContent">
            Lorem, adipisicing elit. Vitae praesentium magnam quis obcaecati
          </div>
          <div className="xinkaliButton">
            <button className="decrease"  onClick={decreaseAmount1}>-</button>
            <button className="increase"  onClick={()=>setXinkaliAmount1(xinkaliAmount1+1)}>+</button>
          </div>
        </div>
        <div className="xinkaliContainer1">
          <div className="xinkaliImage">
            <img src={Xink2} alt="" />
          </div>
          <h1>Khinkali 2</h1>
          <div className="xinkaliContent">
            Lorem, adipisicing elit. Vitae praesentium magnam quis obcaecati
          </div>
          <div className="xinkaliButton">
          <button className="decrease"  onClick={decreaseAmount2}>-</button>
            <button className="increase"  onClick={()=>setXinkaliAmount2(xinkaliAmount2+1)}>+</button>
          </div>
        </div>
        <div className="xinkaliContainer1">
          <div className="xinkaliImage">
            <img src={Xink3} alt="" />
          </div>
          <h1>Khinkali 3</h1>
          <div className="xinkaliContent">
            Lorem, adipisicing elit. Vitae praesentium magnam quis obcaecati
          </div>
          <div className="xinkaliButton">
          <button className="decrease"  onClick={decreaseAmount3}>-</button>
            <button className="increase"  onClick={()=>setXinkaliAmount3(xinkaliAmount3+1)}>+</button>
          </div>
        </div>
        <div className="xinkaliContainer1">
          <div className="xinkaliImage">
            <img src={Xink4} alt="" />
          </div>
          <h1>Khinkali 4</h1>
          <div className="xinkaliContent">
            Lorem, adipisicing elit. Vitae praesentium magnam quis obcaecati
          </div>
          <div className="xinkaliButton">
          <button className="decrease"  onClick={decreaseAmount4}>-</button>
            <button className="increase"  onClick={()=>setXinkaliAmount4(xinkaliAmount4+1)}>+</button>
          </div>
        </div>
        <div className="xinkaliContainer1">
          <div className="xinkaliImage">
            <img src={Xink5} alt="" />
          </div>
          <h1>Khinkali 5</h1>
          <div className="xinkaliContent">
            Lorem, adipisicing elit. Vitae praesentium magnam quis obcaecati
          </div>
          <div className="xinkaliButton">
          <button className="decrease"  onClick={decreaseAmount5}>-</button>
            <button className="increase"  onClick={()=>setXinkaliAmount5(xinkaliAmount5+1)}>+</button>
          </div>
        </div>
        <div className="xinkaliContainer1">
          <div className="xinkaliImage">
            <img src={Xink6} alt="" />
          </div>
          <h1>Khinkali 6</h1>
          <div className="xinkaliContent">
            Lorem, adipisicing elit. Vitae praesentium magnam quis obcaecati
          </div>
          <div className="xinkaliButton">
          <button className="decrease"  onClick={decreaseAmount6}>-</button>
            <button className="increase"  onClick={()=>setXinkaliAmount6(xinkaliAmount6+1)}>+</button>
          </div>
        </div>
      </div>
      <div className="xinkaliPrice">
          <table className={totalAmount===0?'displayNone':''}>
            <tr >
              <th>Xinkali Name</th>
              <th>Per Xinkali price</th>
              <th>Amount</th>
              <th>Price</th>
            </tr>
            <tr className={xinkaliAmount1===0?'displayNone': ''}>
              <td>xinkali 1</td>
              <td>2 GEL</td>
              <td>{xinkaliAmount1}</td>
              <td>{xinkaliAmount1*2} GEL</td>
            </tr>
            <tr className={xinkaliAmount2===0?'displayNone': ''}>
              <td>xinkali 2</td>
              <td>1.5 GEL</td>
              <td>{xinkaliAmount2}</td>
              <td>{xinkaliAmount2*1.5} GEL</td>
            </tr>
            <tr className={xinkaliAmount3===0?'displayNone': ''}>
              <td>xinkali 3</td>
              <td>2.5 GEL</td>
              <td>{xinkaliAmount3}</td>
              <td>{xinkaliAmount3*2.5} GEL</td>
            </tr>
            <tr className={xinkaliAmount4===0?'displayNone': ''}>
              <td>xinkali 4</td>
              <td>3.5 GEL</td>
              <td>{xinkaliAmount4}</td>
              <td>{xinkaliAmount4*3.5} GEL</td>
            </tr>
            <tr className={xinkaliAmount5===0?'displayNone': ''}>
              <td>xinkali 5</td>
              <td>0.5 GEL</td>
              <td>{xinkaliAmount5}</td>
              <td>{xinkaliAmount5*0.5} GEL</td>
            </tr>
            <tr className={xinkaliAmount6===0?'displayNone': ''}>
              <td>xinkali 6</td>
              <td>4 GEL</td>
              <td>{xinkaliAmount6}</td>
              <td>{xinkaliAmount6*4} GEL</td>
            </tr>
          </table>
          <div id="totalPrice" className={totalAmount===0? 'displayNone' : ''}>
            Total Price: {totalPrice} GEL
          </div>
      </div>

    </div>
  );
};

export default Khinkali;
