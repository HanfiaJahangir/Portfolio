import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a passionate game developer with extensive experience in building immersive gaming experiences, particularly in Unity3D. My journey started with a love for programming, and I have worked on multiple complex and innovative game projects.
              <br />
              <br />
              I am highly skilled in 
              <i>
                <b className="purple"> C++, C#, and TypeScript. </b>
              </i> 
              These skills have enabled me to create dynamic and interactive multiplayer games.
              <br />
              <br />
              My expertise lies in developing new and engaging &nbsp;
              <i>
                <b className="purple">game mechanics, multiplayer features,</b>
              </i> and integrating APIs for enhanced gameplay.
              <br />
              <br />
              Some of my key projects include:
              <i>
                <b className="purple"> Pollen Pop, Kart Racing League, Crystale, </b>
              </i>
              and more.
              <br />
              <br />
              I enjoy collaborating with design and art teams to ensure a seamless user experience (UX) and improve gameplay using analytics like Unity Analytics and OneSignal.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/HanfiaJahangir"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/hanfia-jahangir-793861109/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:hanfia.jahangir@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
