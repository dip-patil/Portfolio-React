import React from 'react'
import './Home.css'
import { MdFileDownload } from "react-icons/md";
import IMG from '../assets/dipkumar.jpg'



const Hero = () => {
    const mystylebtn={width:'65%' , paddingLeft:'10%'}
    return (
        <div className='hero' id="home">
            <div className='container'>

                {/* Left Side */}
                <div className='left'>
                    <div className="drawbox">
                         <h1>👋 Hey </h1>
                         <hr/>
                             
                    </div>
                   <h1> I'am Dipkumar Patil</h1>
                    <p>MERN Developer</p>
                    <div className='input-container'>
                        <h4>Exploring the Full Stack Developement with React, Redux, NodeJS, MongoDB, ExpressJS. </h4>
                    </div>
                    

                    <a href={require("../assets/Dipkumar's Resume.pdf")} download="Dipkumar's Resume"><button style={mystylebtn} className='btn' >Download Resume <div className="iconDown"> <MdFileDownload/></div></button></a>
                </div>


                {/* Right Side */}
                <div className='right'>
                    <div className='img-container'>
                        <img src={IMG} alt=''/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
