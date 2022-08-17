import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo3 } from "../../assets/react.svg";
import { ReactComponent as Logo4 } from "../../assets/pwa.svg";
import { ReactComponent as Logo5 } from "../../assets/Node.js_logo.svg";

import { ReactComponent as Js } from "../../assets/js.svg";
import "./css/skills.css";
const Skills = () => {
  return (
    <div className="HomeSkills">
      {/* one */}
      <div className="RowSkills">
        <div className="svgSkills">
          <Js />
        </div>
        <div className="contentSkills">
          <h2>JavaScript</h2>
          <p>
          The increasing development of JavaScript libraries has made JavaScript more efficient. The combination of libraries and frameworks of this language can create powerful web and mobile applications.
          </p>
          <Link to="Projects?filter=JavaScript">JavaScipt Projects</Link>
        </div>
      </div>
      {/* two */}
      <div className="RowSkills"> <div className="svgSkills">
          <Logo3 />
        </div>
        <div className="contentSkills">
          <h2  className="h2React">
            React Js
          </h2>
          <p>
          I use ReactJS for single page applications
It is the best option for creating high-speed applications
But it is not always the best option
I also use NextJs for applications that need to be indexed by search engines instead of Reactjs
          </p>
          <Link className="aReact" to="Projects?filter=react">
            React Projects
          </Link>
        </div>
       
      </div>
      {/* three */}
      <div className="RowSkills">
        <div className="svgSkills">
          <Logo4 />
        </div>
        <div className="contentSkills">
          <h2 className="h2Pwa">Progressive Web Apps</h2>
          <p>
          I use PWA at the same time as other technologies according to the needs. PWA can provide the needs that we have from a mobile application.
The advantages of using PWA can be mentioned for web application development on phones with Android and iOS operating systems and web application development for other devices.
          </p>
          <Link className="aPwa" to="Projects?filter=pwa">
            JavaScipt Projects
          </Link>
        </div>
      </div>
      {/* four */}
      <div className="RowSkills"><div className="svgSkills">
          <Logo5 />
        </div>
        <div className="contentSkills">
          <h2 className="h2Nodejs">Node js </h2>
          <p>
          I use NodeJS for the backend side of the website
NodeJS gives me everything I need
NodeJ has a very high speed and is easily matched with all databases and view engines
Working with REST APIs , requesting and querying the server
, Authentication and authorization , cookies and sessions , using middlewares and...
          </p>
          <Link className="aNodejs" to="Projects?filter=nodejs">
            Nodejs Projects
          </Link>
        </div>
        
      </div>
    </div>
  );
};

export default Skills;
