import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FaGooglePlay } from "react-icons/fa";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {/* Technologies used (Non-clickable labels) */}
        {props.technologies && (
          <div style={{ marginBottom: "15px" }}>
            {props.technologies.map((tech, index) => (
              <span
                key={index}
                style={{
                  backgroundColor: "#a020f0", // Brighter blue color similar to the Play Store button
                  color: "white",
                  padding: "5px 10px",
                  borderRadius: "5px",
                  marginRight: "5px",
                  marginBottom: "5px", // Space between rows of technologies
                  display: "inline-block",
                  fontSize: "0.9em",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Play Store Button */}
        {props.playstoreLink && props.playstoreLink !== "#" && (
          <Button variant="primary" href={props.playstoreLink} target="_blank">
            <FaGooglePlay /> &nbsp;
            {"Playstore"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
