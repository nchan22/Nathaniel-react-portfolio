import React from "react";
// Add a profile picture to the images
// import Avatar from ../
import UofTLogo from "../assets/images/uoft_logo.jpeg";
import UWLogo from "../assets/images/uw_logo.png";
import "../app.css";

const About = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <div className="row abstract-back ">
                  <img className="avatar" src={Avatar} />
                </div>
              </div>

              <div className="card-body">
                <div className="row">
                  <p className="p-about">
                    A Recreation Therapist turned Coder with a love for
                    creativity. With a focus on front-end, the endless growth
                    and possibilities of front end design is always an
                    intriguing aspect, where HTML, CSS, JavaScript and React are
                    skills learned.
                  </p>
                </div>
              </div>

              <div className="modal-footer" />

              <div className="card-body">
                <h2 className="edu">Education</h2>
                <br />

                <div className="grid-container-profile">
                  <div className="grid-item">
                    <div className="title-uni">University Of Toronto</div>
                    <div className="title-concentration">
                      Full Stack Web Development Boot Camp
                    </div>
                  </div>

                  <div className="grid-item">
                    <a
                      href="https://bootcamp.learn.utoronto.ca"
                      target="_blank"
                    >
                      <img className="university-logo" src={UofTLogo} />
                    </a>
                  </div>

                  <div className="grid-item">
                    <div className="title-uni">University of Waterloo</div>
                    <div className="title-concentration">
                      Bachelors of Art, Major in Therapeutic Recreation
                    </div>
                  </div>

                  <div className="grid-item">
                    <a href="https://uwaterloo.ca" target="_blank">
                      <img className="university-logo" src={UWLogo} />
                    </a>
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

export default About;
