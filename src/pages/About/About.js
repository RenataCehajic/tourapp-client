import React from "react";
import "./aboutus.css";
function About() {
  return (
    <div className="about-div">
      <h1>About us:</h1>
      <p>
        This is a group assignment from Codaisseur, where we work together and
        test our learned skills in REACT, Redux, HTML , CSS , REST API,
        Sequelize (PostGreSQL) and most importantly Github.
      </p>
      <div className="card">
        <div className="card-header" id="headername">
          <a href="https://www.linkedin.com/in/erik-hendrikson-1a9805a0/">
            <img
              align="left"
              alt="LinkedIn"
              width="30px"
              src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/linkedin.svg"
            />
          </a>
          <a href="https://github.com/ErikHendrikson">
            <img
              align="left"
              alt="LinkedIn"
              width="30px"
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            />
          </a>
        </div>

        <img
          src="https://avatars.githubusercontent.com/u/77502322?v=4"
          style={{ width: "20%", height: "20%" }}
          className="card-img-top"
          alt="erik's foto"
        />
        <span>Erik</span>
      </div>
      <div className="card">
        <div className="card-header" id="headername">
          <a href="https://www.linkedin.com/in/renata-cehajic-49712630/">
            <img
              align="left"
              alt="LinkedIn"
              width="30px"
              src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/linkedin.svg"
            />
          </a>
          <a href="https://github.com/RenataCehajic">
            <img
              align="left"
              alt="LinkedIn"
              width="30px"
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            />
          </a>
        </div>

        <img
          src="https://avatars.githubusercontent.com/u/72190443?v=4"
          style={{ width: "20%", height: "20%" }}
          className="card-img-top"
          alt="Renata's foto"
        />
        <span>Renata</span>
      </div>
      <div className="card">
        <div className="card-header" id="headername">
          <a href="https://www.linkedin.com/in/jannesaussems/">
            <img
              align="left"
              alt="LinkedIn"
              width="30px"
              src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/linkedin.svg"
            />
          </a>
          <a href="https://github.com/jaussems">
            <img
              align="left"
              alt="LinkedIn"
              width="30px"
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            />
          </a>
        </div>
        <img
          src="https://avatars.githubusercontent.com/u/70952271?v=4"
          style={{ width: "20%", height: "20%" }}
          className="card-img-top"
          alt="Jannes's Foto"
        />
        <span>Jannes</span>
      </div>
    </div>
  );
}

export default About;
