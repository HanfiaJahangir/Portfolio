import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { DiJavascript1, DiGit, DiPython } from "react-icons/di";
import { SiFirebase, SiTypescript, SiUnity, SiCsharp, SiPostman } from "react-icons/si";
import { FaUnity } from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus /> {/* C++ */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCsharp /> {/* C# */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript /> {/* TypeScript */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 /> {/* JavaScript */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaUnity /> {/* Unity3D */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase /> {/* Firebase */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython /> {/* Python */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit /> {/* Git */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman /> {/* Postman */}
      </Col>
    </Row>
  );
}

export default Techstack;
