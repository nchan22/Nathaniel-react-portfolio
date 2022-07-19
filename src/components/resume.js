import React from "react";
import Logo from "../assets/images/logo.png";
import JqueryLogo from "../assets/images/jquery-logo.png";
import BootstrapLogo from "../assets/images/bootstrap-logo.png";
import MernLogo from "../assets/images/mern-logo.png";
import WebpackLogo from "../assets/images/webpack-logo.png";
import HandlebarsLogo from "../assets/images/handlebars-logo.png";
import SqlLogo from "../assets/images/sql-logo.png";
import MongoLogo from "../assets/images/mongodb-logo.png";
import "../App.css";
import "../portfolio.css";

const Resume = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="header">
                <h3>
                  Download Resume:{" "}
                  <a href="https://github.com/nchan22/a-react-portfolio-of-mine/raw/main/src/assets/nathaniel-chan-resume.pdf">
                    Nathaniel Chan
                  </a>
                </h3>
              </div>

              <div className="modal-footer" />

              <div className="header">
                <h3>Skills</h3>
              </div>
              <div className="modal-footer" />

              <div className="card-body">
                <div className="row">
                  <div className="code">Open Minded and Critical Thinking</div>
                </div>
                <div className="grid-container-skills">
                  <div className="grid-item-skills">
                    <p className="p-about">Fast Learner</p>
                  </div>

                  <div className="grid-item-skills">
                    <p className="p-about">Excellent Communicator</p>
                  </div>

                  <div className="grid-item-skills">
                    <p className="p-about">Design Patterns</p>
                  </div>
                </div>
              </div>
              <div className="modal-footer" />

              <div className="card-body">
                <div className="row">
                  <div className="code">Technologies</div>
                </div>

                <div className="grid-container-skills">
                  <div className="grid-item-skills">
                    <img src={Logo} className="img-skills" />
                  </div>

                  <div className="grid-item-skills">
                    <img src={MernLogo} className="img-skills" />
                  </div>

                  <div className="grid-item-skills">
                    <img src={JqueryLogo} className="img-skills" />
                  </div>

                  <div className="grid-item-skills">
                    <img src={WebpackLogo} className="img-skills" />
                  </div>

                  <div className="grid-item-skills">
                    <img src={BootstrapLogo} className="img-skills" />
                  </div>

                  <div className="grid-item-skills">
                    <img src={HandlebarsLogo} className="img-skills" />
                  </div>

                  <div className="grid-item-skills">
                    <img src={SqlLogo} className="img-skills" />
                  </div>

                  <div className="grid-item-skills">
                    <img src={MongoLogo} className="img-skills" />
                  </div>
                </div>
              </div>

              <div className="modal-footer" />

              <div className="card-body">
                <div className="row">
                  <div className="code">Quality Assurance</div>
                </div>

                <div className="grid-container-skills">
                  <div className="grid-item-skills">
                    <p className="p-about">Jest</p>
                  </div>

                  <div className="grid-item-skills">
                    <p className="p-about">
                      Test Driven Development (TDD) & Object Oriented
                      Development (OOD)
                    </p>
                  </div>
                </div>
              </div>
              <div className="modal-footer" />

              <div className="card-body">
                <div className="row">
                  <div className="code">Project Management Skills</div>
                </div>

                <div className="grid-container-skills">
                  <div className="grid-item-skills">
                    <p className="p-about">
                      Time Management and Constant Updating
                    </p>
                  </div>

                  <div className="grid-item-skills">
                    <p className="p-about">Team Leader</p>
                    <ul>
                      <li>Active Communicator</li>
                      <li>Active Listener</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Resume;
