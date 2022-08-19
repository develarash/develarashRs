import { ReactComponent as Js } from "../assets/miniskills/miniJs.svg";
import { ReactComponent as Typescript } from "../assets/miniskills/typescript-icon-svgrepo-com.svg";
import { ReactComponent as Nodejs } from "../assets/miniskills/nodejs-ar21.svg";
import { ReactComponent as Sass } from "../assets/miniskills/sass-lang-ar21.svg";
import { ReactComponent as MongoDb } from "../assets/miniskills/mongodb-ar21.svg";
import { ReactComponent as Mysql } from "../assets/miniskills/mysql-horizontal.svg";
import { ReactComponent as React } from "../assets/miniskills/reactjs-ar21.svg";
import { ReactComponent as Redux } from "../assets/miniskills/redux.svg";
import { ReactComponent as Pwa } from "../assets/miniskills/pwa.svg";
import { ReactComponent as Tailwind } from "../assets/miniskills/tailwindcss-ar21.svg";
import { ReactComponent as Api } from "../assets/miniskills/api-svgrepo-com.svg";
import { ReactComponent as Git } from "../assets/miniskills/git-svgrepo-com.svg";
// import { ReactComponent as Tailwind } from "../assets/miniskills/api-svgrepo-com.svg";

import "./screenSkills.css";
function Skills() {
  return (
    <div className="ScreenSkills">
      <div className="ScreenSkillsItem">
        <div className="ScreenSkillsItemlogo">
          <Js />
        </div>
        <div>
          <div>
           <li>Experience of programming with raw JavaScript</li>
            <li>
              Experience in developing object-oriented JavaScript applications
            </li>
            <li>Familiarity with ECMAScript features</li>
            <li>
              Highly skilled at front-end web development using advanced
              JavaScript
            </li>
            <li>
              Has used DOM manipulation and AJAX at an advanced level and
              debugged and tested these cross-browser
            </li>
            <li>Experience with Asynchronous control flow
</li>
          </div>
        </div>
      </div>
      <div className="ScreenSkillsItem">
        <div className="ScreenSkillsItemlogo">
          <React />
        </div>
        <div>
          <div>
          <li>Experience of programming with ReactJs + NextJs</li>
            <li>Familiarity with React Hooks V-18</li>
            <li>Familiarity with React Lifecycle </li>
            <li>implement single page applicaitons (spa) </li>

          </div>
        </div>
      </div>
      <div className="ScreenSkillsItem">
        <div className="ScreenSkillsItemlogo">
          <Redux />
        </div>
        <li>Familiarity with Redux to manage states in Reactjs</li>
        <div>
         
        </div>
      </div>
      <div className="ScreenSkillsItem">
        <div className="ScreenSkillsItemlogo">
          <Nodejs />
        </div>
        <div>
          <div>
            <li>Implement authentication and access authorization and working with sessions and cookies and....</li>
            <li>Implement of mathematical and specialized operations on the server side of the application using NodeJS</li>
     <li>Sending requests and APIs</li>
           <li>Experience with MVC design pattern
</li>
<li>Working with MangoDB and MySQL databases</li>
          </div>
        </div>
      </div>
      <div className="ScreenSkillsItem">
        <div className="ScreenSkillsItemlogo">
          <Git />
        </div>
        <div>
          <div>
           <li>Improve application CI/CD pipeline
</li>
<li>Familiarity with Github and Gitlab </li>

          </div>
        </div>
      </div>
      <div className="ScreenSkillsItem">
        <div className="ScreenSkillsItemlogo">
          <Mysql />
        </div>
        <div>
          <div>
            <li>Implementation of relational database </li>
        <li>Familiar with MySQL database and sending and receiving queries</li>
        <li>CRAD operation on the application using (Sequelize)</li>
        <li>Designing databases for Ecommerce , blogs 8...</li>
          </div>
        </div>
      </div>
      <div className="ScreenSkillsItem">
        <div className="ScreenSkillsItemlogo">
          <MongoDb />
        </div>
        <div>
          <div>
          <li>Familiar with MongoDB and to store big data using Mongoose</li>
          </div>
        </div>
      </div>
      <div className="ScreenSkillsItem">
        <div className="ScreenSkillsItemlogo">
          <Sass />
        </div>
        <div>
          <div>
            
          </div>
        </div>
      </div>
      <div className="ScreenSkillsItem">
        <div className="ScreenSkillsItemlogo">
          <Tailwind />
        </div>
        <div>
          <div>
          
          </div>
        </div>
      </div>
      <div className="ScreenSkillsItem">
        <div className="ScreenSkillsItemlogo">
          <Typescript />
        </div>
        <div>
          <div>
        
          </div>
        </div>
      </div>
    
      <div className="ScreenSkillsItem">
        <div className="ScreenSkillsItemlogo">
          <Pwa />
        </div>
        <div>
          <div>
     
          </div>
        </div>
      </div>
    </div>
  );
}


export default Skills;
