import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiUnity,
  SiJetbrains,
  SiDiscord,
} from "react-icons/si";
import { FaUnity } from "react-icons/fa";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiJetbrains /> {/* JetBrains Rider */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode /> {/* Visual Studio Code */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman /> {/* Postman */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack /> {/* Slack */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDiscord /> {/* Discord */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaUnity /> {/* Unity */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel /> {/* Vercel */}
      </Col>
    </Row>
  );
}

export default Toolstack;
