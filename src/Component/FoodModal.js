import "./modal.css";
import React from 'react'

const FoodModal = ({ setModal }) => {
  return (
    <div className="modalContainer">
      <div className="modal">
        <div className="modalBtn">
          <form action="">
            <label htmlFor="">User Name</label>
            <input type="text" />
            <label htmlFor="">Email</label>
            <input type="text" />
            <label htmlFor="">Password</label>
            <input type="password" />

          </form>
          <div className="modalButtons">
            <button className="modalBtn1">submit</button>
            <button className="modalBtn2" onClick={() => setModal(false)}>cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodModal;
