import React, { useState, useEffect } from "react";
import axios from "axios";
import { MdCheckCircle } from "react-icons/md";
// import BTC from '../assets/btc-img.png'
import { FiArrowUpRight, FiArrowDown } from "react-icons/fi";
import { BiCloudDownload } from "react-icons/bi";

import "./Skills.css";

const Featured = () => {
  

  
  return (
    <div className="featured" id="skill">
      <h1 className="skillTitle">Skills</h1>
      
      <div className="container">
        {/* Left */}
        <div className="left">
          <h3>Front-end</h3>
          <div className="skillsList">
            <div className="card">
              <div className="icons">
                <MdCheckCircle size={20} />
              </div>
              <h4> HTML</h4>
            </div>
            <div className="card">
            <div className="icons">
                <MdCheckCircle size={20} />
              </div>
              <h4>CSS</h4>
            </div>
            <div className="card">
            <div className="icons">
                <MdCheckCircle size={20} />
              </div>
              <h4>Bootstrap</h4>
            </div>
            <div className="card">
            <div className="icons">
                <MdCheckCircle size={20} />
              </div>
              <h4>ReactJS</h4>
            </div>
            <div className="card">
            <div className="icons">
                <MdCheckCircle size={20} />
              </div>
              <h4>JavaScript</h4>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="right">
          <h3>Back-end</h3>
          <div className="skillsList">
            <div className="card">
              <div className="icons">
                <MdCheckCircle size={20} />
              </div>
              <h4>NodeJS</h4>
            </div>
            <div className="card">
            <div className="icons">
                <MdCheckCircle size={20} />
              </div>
              <h4>XAMPP</h4>
            </div>
            <div className="card">
            <div className="icons">
                <MdCheckCircle size={20} />
              </div>
              <h4>MongoDB</h4>
            </div>
            
          </div>
        </div>
        
      </div>
     
      
    </div>
  );
};

export default Featured;
