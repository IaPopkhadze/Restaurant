import { GrRestaurant } from "react-icons/gr";
import "./Header.css";
import React from 'react'
const Header = () => {
  return (
    <div className="header-wrapper">
      <GrRestaurant size={48} />
     <h1>Ia's Restaurant</h1>
    </div>
  );
};

export default Header;
