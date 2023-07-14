import React from "react";
import "./Contact.css";
import { AiOutlineSend } from "react-icons/ai";

const Signup = () => {
    const mystyles = {height:'140px',width:'90%',padding:'0px 30px 80px'}
    const cover = {width:'90%'}
    const btnStyle = { width:'30%'}
  return (
    <div className="signup" id="contact">
      <h1 className="skillTitle">Contact Me</h1>

      <div className="container">
        {/* left */}
        <div className="left">
            <div className="contactList">
          <div className="card1">  
            <h4> What'sApp</h4>
            <span><a href="tel:+919689629399">+91 9689629399</a></span>
          </div>
          <div className="card1">  
            <h4> Email ID</h4>
            <span><a href="mailto:dipkumar.patil.2017@gmail.com">dipkumar.patil.2017@gmail.com</a></span>

          </div>
          <div className="card1">  
            <h4> LinkedIn</h4>
            <span><a href="https://www.linkedin.com/in/dipkumar-patil">https://www.linkedin.com</a></span>

          </div>
          </div>
        </div>

        {/* right */}
        <div className="right">
          <div className="heading"><h2>Connect with Me</h2>
          </div>
          <div className="input-container">
            <input style={cover} type="text" placeholder="Enter your Name" />
            <input style={cover} type="email" placeholder="Enter your email" />
            <input style = {mystyles} type="text" placeholder="Subject" />
            <button style = {btnStyle } className="btn">Send <div className="iconSend"> <AiOutlineSend/></div></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
