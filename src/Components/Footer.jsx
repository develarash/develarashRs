import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/footer.css";
import axios from "axios";

// log svg
import { ReactComponent as Email } from "../assets/social media/envelope-solid.svg";
import { ReactComponent as Twitter } from "../assets/social media/twitter-square-brands.svg";
import { ReactComponent as Linkedin } from "../assets/social media/linkedin-brands.svg";
import { ReactComponent as Phone } from "../assets/social media/phone-square-alt-solid.svg";
import { ReactComponent as Github } from "../assets/social media/github-square-brands.svg";

const linkNavigation = [
  { address: "/", name: "AboutMe" },
  { address: "skills", name: "Skills " },
  { address: "Exprience", name: "Exprience" },
  { address: "Projects", name: "Projects" },
  { address: "questions", name: "questions ?" },
  { address: "blog", name: "blog " },
];

const Footer = ({bgdata}) => {
  return (
    <div className="footer">
      <div className="footerSection">
      <div className="navLinks1">
        <ul>
          {linkNavigation.map((item, index) => (
            <li  style={{fontSize:"120%"}} className="footerLi" key={index}>
              <Link className="footera" to={item.address}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navLinks2">
      <div className="socialmedais">
     
        
        <ul className="socialmedaisul">
          <li className="socialmedaisulLi" >
            <Email />
            <span >Develarash@gmail.com</span>
          </li>
          <li className="socialmedaisulLi" >
            <Phone  />
            <span >+98_9381378120</span>
          </li>
          <li className="socialmedaisulLi" >
            <Twitter   />
            <a href="https://twitter.com/develarash">twitter@Develarash</a>

          </li>
          <li className="socialmedaisulLi" >
            <Linkedin />
            <a href="https://www.linkedin.com/in/arash-rahimi-89b082224/">LinkedIn/arashramy</a>
          </li>
          <li className="socialmedaisulLi" >
            <Github  />
            <a href="https://github.com/develarash">github.com/develarash</a>
          </li>
         
        </ul>
      </div>
       
      </div>
      <div className="navLinks3">
      <h3 style={{fontSize:"140%"}} >Latest Articles</h3>
        <ul className="navLinks3ul">
          {bgdata&&
          bgdata.slice(0, 3).map((item, index) => (
            <li  style={{fontSize:"120%"}} className="navLinks3li" key={index}><Link to={`/blog/${item.id}`}>{item.title}</Link></li>
          ))}
        </ul>
      </div>
      </div>
    </div>
  );
};

export default Footer;
