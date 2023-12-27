import React from "react";
import Logo from "./Assets/navbar/Logo.png"
const Navbar = () => {
  
  return (
    <nav className="Navbar">
      <div className="leftdiv">
       <img src="src/Assets/navbar/Logo.png" />
        <ul>
          <li>Recursos</li>
          <li>Preços</li>
          <li>Carreiras</li>
          <li>Ajuda</li>
        </ul>
      </div>
      <img src="src/Assets/navbar/_App badges.svg"/>
    </nav>
  
  );
};

export default Navbar;