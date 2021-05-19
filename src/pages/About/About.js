import React from "react";
import "./aboutus.css";
function About() {
  return (
    <div className="about-div">
      <h1>About us:</h1>
      <p>
        This is a group assignment from Codaisseur, where we work together and
        test our learned skills in REACT, Redux, HTML , CSS, and most
        importantly Github.
      </p>
      <div class="card">
        <div class="card-header" id="headername">
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
          Erik
        </div>

        <img
          src="https://avatars.githubusercontent.com/u/77502322?v=4"
          style={{ width: "20%", height: "20%" }}
          class="card-img-top"
          alt="erik's foto"
        />
      </div>
      <div class="card">
        <div class="card-header" id="headername">
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
          Renata
        </div>

        <img
          src="https://avatars.githubusercontent.com/u/72190443?v=4"
          style={{ width: "20%", height: "20%" }}
          class="card-img-top"
          alt="Renata's foto"
        />
      </div>
      <div class="card">
        <div class="card-header" id="headername">
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
          Jannes
        </div>
        <img
          src="https://avatars.githubusercontent.com/u/70952271?v=4"
          style={{ width: "20%", height: "20%" }}
          class="card-img-top"
          alt="Jannes's Foto"
        />
      </div>
    </div>
  );
}

export default About;
