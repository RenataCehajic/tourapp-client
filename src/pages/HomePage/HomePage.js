import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

import "./style.css";

export default function HomePage() {
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <Container>
        <div id="landing-header">
          <Link
            to={"/tours"}
            className="btn btn-lg btn-info"
            style={{ marginTop: "-100px" }}
          >
            View Free Walking Tours in Amsterdam
          </Link>
        </div>

        <ul className="slideshow">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </Container>
    </div>
  );
}
