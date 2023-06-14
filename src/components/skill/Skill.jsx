import React from "react";

function Skill() {
  return (
    <div className="section" id="skills">
      <div className="skill">
        <div className="container">
          <div className="row">
            <div className="col-md" data-aos="flip-left">
              <h3 className="heading-primary">Programming Skill</h3>

              <li className="progressbar">
                <h5>React JS</h5>
                <span className="bar">
                  {" "}
                  <span className="react"></span>
                </span>
              </li>
              <li className="progressbar">
                <h5>Node JS,Express JS and EJS</h5>
                <span className="bar">
                  {" "}
                  <span className="node"></span>
                </span>
              </li>
              <li className="progressbar">
                <h5>Javascript including ES5, ES6 </h5>
                <span className="bar">
                  {" "}
                  <span className="js"></span>
                </span>
              </li>
              <li className="progressbar">
                <h5>React Native</h5>
                <span className="bar">
                  {" "}
                  <span className="db"></span>
                </span>
              </li>
              <li className="progressbar">
                <h5>MongoDB</h5>
                <span className="bar">
                  {" "}
                  <span className="python"></span>
                </span>
              </li>
            </div>
            <div className="col-md" data-aos="flip-right">
              <h3 className="heading-primary">Design Skill</h3>

              <li className="progressbar">
                <h5>Material UI, React-bootstrap, Ant design,</h5>
                <span className="bar">
                  {" "}
                  <span className="react"></span>
                </span>
              </li>
              <li className="progressbar">
                <h5>CSS3 & SCSS</h5>
                <span className="bar">
                  {" "}
                  <span className="node"></span>
                </span>
              </li>
              <li className="progressbar">
                <h5>HTML</h5>
                <span className="bar">
                  {" "}
                  <span className="js"></span>
                </span>
              </li>
              <li className="progressbar">
                <h5>LOGO Design</h5>
                <span className="bar">
                  {" "}
                  <span className="db"></span>
                </span>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
