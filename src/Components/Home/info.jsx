import React from "react";
import "./css/info.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import CodeIcon from "@mui/icons-material/Code";
import { ReactComponent as Language } from "../../assets/social media/globe-solid.svg";
import { ReactComponent as Socailmedia } from "../../assets/social media/address-card-solid.svg";
import { ReactComponent as Email } from "../../assets/social media/envelope-solid.svg";
import { ReactComponent as Twitter } from "../../assets/social media/twitter-square-brands.svg";
import { ReactComponent as Linkedin } from "../../assets/social media/linkedin-brands.svg";
import { ReactComponent as Phone } from "../../assets/social media/phone-square-alt-solid.svg";
import { ReactComponent as Github } from "../../assets/social media/github-square-brands.svg";
// import { ReactComponent as Codeicon } from "../../assets/skills/code-solid.svg";
import { ReactComponent as Mongo } from "../../assets/miniskills/mongodb-ar21.svg";
import { ReactComponent as Mysql } from "../../assets/miniskills/mysql-horizontal.svg";
import { ReactComponent as ReactMiniLogo } from "../../assets/miniskills/reactjs-ar21.svg";
import { ReactComponent as SassMiniLogo } from "../../assets/miniskills/sass-lang-ar21.svg";
import { ReactComponent as TailwindcssMiniLogo } from "../../assets/miniskills/tailwindcss-ar21.svg";
import { ReactComponent as JavaScriptMiniLogo } from "../../assets/miniskills/javascript-horizontal.svg";
import { ReactComponent as NodejsMiniLogo } from "../../assets/miniskills/nodejs-ar21.svg";
import { ReactComponent as JsMiniLogo } from "../../assets/miniskills/miniJs.svg";
import { ReactComponent as PWAMiniLogo } from "../../assets/miniskills/pwa.svg";
import { ReactComponent as ReduxMiniLogo } from "../../assets/miniskills/redux.svg";


import englishflag from "../../assets/enflag.png";
// import iranflag from "../../assets/ir";
import iranflag from "../../assets/irflalg.png";

import franceflag from "../../assets/frflag.png";
function Info() {
  return (
    <div className="infoHome">
       
         <div className="socialmedais">
        <h1 className="h1socialmedais">
          <span> Social Medias</span>{" "}
        </h1>
        
        <ul>
          <li className="svginfo">
            <Email style={{width:"7%"}} />
            <span style={{fontSize:"180%"}}>Develarash@gmail.com</span>

          </li>
          <li className="svginfo">
            <Twitter  style={{width:"7%"}}/>
            <a href="https://twitter.com/develarash">twitter@Develarash</a>

          </li>
          <li className="svginfo">
            <Linkedin style={{width:"7%"}} />
            <a href="https://www.linkedin.com/in/arash-rahimi-89b082224/">LinkedIn/arashramy</a>
          </li>
          <li className="svginfo">
            <Github style={{width:"7%"}} />
            <a href="https://github.com/develarash">github.com/develarash</a>
          </li>
          <li className="svginfo"  style={{fontSize:"102%"}}>            <Phone style={{width:"7%"}} />
            <span style={{fontSize:"180%"}}>+98_9381378120</span>
          </li>
        </ul>
      </div>
      <div className="otherskills">
        <h1 className="h1otherskills">
           Skills
        </h1>
        {/* <h3>Professional title: Fullstack javascript develper</h3> */}
        <div className="divulskills">
         <ul>
          <li >JavaScript </li>
          <li >Node Js </li>
          <li >React JS </li>
          <li >Redux</li>
          <li >PWA</li>
         </ul>
         <ul> 
         <li >MongoDB</li>
         <li >MySql</li>
         <li >GitHub & GitLab</li>

         <li > Html,Css,Sass,
          TailWind</li>
         </ul>
         </div>
      </div>
      <div className="languages">
        <h1 className="h1languages">
          {" "}
          <span>Languages</span>
        </h1>
        <ul>
          <li>
            {" "}
            <div className="img">
              <div></div>
              <img className="intendimg" src={englishflag} alt="ss" />
            </div>
            <span>Englsih </span>

          </li>
          <li>
            {" "}
            <div className="img">
              <img className="intendimg" src={franceflag} alt="ss" />
            </div>
            <span>franch </span>
  
          </li>
          <li>
            {" "}
            <div className="img">
              <img className="intendimg" src={iranflag} alt="ss" />
            </div>
            <span>Persian</span>
          </li>
        </ul>
      </div>
     
     
   
    </div>
  );
}

export default Info;
