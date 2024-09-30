import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Hanfia Jahangir</span>
            &nbsp;from <span className="purple"> Lahore, Pakistan.</span>
            <br />
            I am a passionate Senior Game Developer, specializing in Unity3D with a focus on immersive game experiences.
            <br />
            <br />
            Outside of development, I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Sketching
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring new technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Keep pushing boundaries and building meaningful experiences!"{" "}
          </p>
          <footer className="blockquote-footer">Hanfia Jahangir</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
