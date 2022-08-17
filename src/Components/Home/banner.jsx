import React from 'react'
import pic from "../../assets/banner-prof2.jpg";
import {ReactComponent as Logo1} from "../../assets/js.svg";
import {ReactComponent as Logo2} from "../../assets/nodejs2.svg";
import {ReactComponent as Logo3} from "../../assets/react.svg";
import {ReactComponent as Logo4} from "../../assets/pwa.svg";
import { Navigate, useNavigate } from "react-router-dom";

const Banner = () => {
    const navigate=useNavigate();
  return (
    <div className='banner'>
    <div className='banner-intro'>
        <div className='intro-img'>
            <img src={pic} alt="" /> </div>
            <div className='intro-name'>
                <p>Fullstack </p>
                <h1 className='big-font'>JavaScript</h1>
                <p >developer</p>

            </div>
    </div>
    <div className='banner-about-me'>
        <h2>About me</h2>
        <p>I am Arash, a full JavaScript developer
I was born in 1999 and studied computer software in high school and university
I have participated in startup projects and cooperated with software companies, and now I can fulfill all your expectations from a fullstack programmer.</p>
        <button className='exprienceButton' onClick={()=>navigate("/Exprience") }>Exprience</button>
    </div>
    </div>
  )
}

export default Banner