import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { AiOutlineSend } from "react-icons/ai";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="header">
      <div className="container">
        <h2>
          Dipkumar <span className="primary">Patil</span>
        </h2>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#skill">Skill</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          
        </ul>
        <div className="btn-group">
          <button className="btn">
            Sign Up 
          </button>
        </div>

        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={25} style={{ color: "#333" }} />
          ) : (
            <FaBars size={25} style={{ color: "#333" }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
