import React from "react";
import Pic from "../../image/about.png";
import axios from "axios";

import { AiFillGithub, AiFillFacebook, AiFillLinkedin } from "react-icons/ai";

function AboutUs() {
  const handleClick = async () => {
    const viewer = { views: "one viewer viewed your cv" };
    await axios.post(
      "https://myportfoliowebsitebackend.herokuapp.com/cvviews",
      viewer
    );
  };

  return (
    <div className="section" id="about">
      <div className="container">
        <div className="row">
          <div className="col-md about-text" data-aos="flip-right">
            <h3 className="heading-primary">About Me</h3>
            <p className="secondary-text">
              Highly motivated innovative aspirant with 1+ years of proven track
              record, result driven focus and extensive technical and
              programming skills.passion for developing innovative programs that
              expedite the efficiency and effectiveness of organizational
              success. Well-versed in technology and writing code to create
              systems that are reliable and user-friendly. Skilled leader who
              has the proven ability to motivate, educate, and manage a team of
              professionals to build software programs and effectively track
              changes. Confident communicator, strategic thinker, and innovative
              creator to develop software that is customized to meet a company’s
              organizational needs, highlight their core competencies, and
              further their success.
            </p>

            <p className="secondary-text"></p>

            <div className="social-icon mb-4">
              <a
                href="https://github.com/Dhibarajan/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub className="icon" />
              </a>
              <a
                href="https://www.linkedin.com/in/dhibarajan-r-r-6a19061b7/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillLinkedin className="icon" />
              </a>
              <AiFillFacebook className="icon" />
            </div>

            <a
              href="/download_cv"
              target="_blank"
              rel="noopener noreferrer"
              className="default-secondary_btn"
              onClick={handleClick}
            >
              Download CV
            </a>
          </div>
          <div className="col-md" data-aos="zoom-in-left">
            <img
              src={Pic}
              className="img-fluid"
              alt="about-pic"
              id="optionalstuff"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
