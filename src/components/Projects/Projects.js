import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import pollenPopImage from "../../Assets/Projects/pollen_pop.jpg"; // Updated to .jpg
import flyingBatImage from "../../Assets/Projects/flying_bat.jpg"; // Updated to .jpg
import clawRobotHeroImage from "../../Assets/Projects/claw_robot_hero.jpg"; // Updated to .jpg
import rhinoRobotCarImage from "../../Assets/Projects/rhino_robot_car.jpg"; // Updated to .jpg
import crystaleImage from "../../Assets/Projects/crystale.jpg"; // Updated to .jpg
import zombieSurvivalImage from "../../Assets/Projects/zombie_survival.jpg"; // Updated to .jpg
import kartRacingImage from "../../Assets/Projects/kart_racing.jpg"; // Updated to .jpg
import scaryGrannyImage from "../../Assets/Projects/scary_granny.jpg"; // Updated to .jpg

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pollenPopImage}
              isBlog={false}
              title="Pollen Pop"
              description="A multiplayer match-three game with Web3 integration and PVP functionality. Features Free Play, Tournament, Play for Prize, Story Mode, and PVP modes. Integrated boosters and a dynamic in-game economy with rewards from leaderboard positions and daily milestones."
              playstoreLink="https://play.google.com/store/apps/details?id=hexagon.pollenpop.game&pcampaignid=web_share"
              technologies={["Unity3D", "C#", "Firebase", "Colyseus", "Web3"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flyingBatImage}
              isBlog={false}
              title="Bat Super Hero"
              description="A superhero game where players take on missions involving rescue operations and combat against enemy groups. Players can transform into various forms to navigate challenges effectively."
              playstoreLink="https://play.google.com/store/apps/details?id=com.rds.bat.bike.robot.transformation.superhero.games&pcampaignid=web_share"
              technologies={["Unity3D", "C#", "Google Ads SDK"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={clawRobotHeroImage}
              isBlog={false}
              title="Claw Robot Hero"
              description="An action-packed superhero game where players embark on missions involving rescues, attacking enemy groups, and fighting hordes of foes. Transform into various forms to tackle different challenges."
              playstoreLink="https://play.google.com/store/apps/details?id=com.gag.superhero.robot.water.slide.adventure.game&pcampaignid=web_share"
              technologies={["Unity3D", "C#", "Unity Ads SDK"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rhinoRobotCarImage}
              isBlog={false}
              title="Rhino Robot Car Transformation"
              description="An action-packed superhero game where players embark on missions involving rescues, attacking enemy groups, and fighting hordes of foes. Transform into various forms to tackle different challenges."
              playstoreLink="https://play.google.com/store/apps/details?id=com.gag.rhino.monster.truck.transform.robot.games&pcampaignid=web_share"
              technologies={["Unity3D", "C#", "Google Ads SDK"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={scaryGrannyImage}
              isBlog={false}
              title="Scary Granny Game"
              description="A horror escape game where players must solve puzzles and avoid a terrifying antagonist to escape the house. Includes immersive sound design and atmosphere to enhance the horror experience."
              playstoreLink="https://play.google.com/store/apps/details?id=com.axondev.scary.granny.house.horror.escape&pcampaignid=web_share"
              technologies={["Unity3D", "C#", "Google Ads SDK"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={zombieSurvivalImage}
              isBlog={false}
              title="Zombie Survival Game"
              description="A survival shooter game integrated with Roku functionality, where players fight waves of zombies with class-based mechanics. Features a multiplayer mode where players battle each other between waves, with the last player standing declared the winner."
              playstoreLink="#"
              technologies={["Unity3D", "C#", "Colyseus", "Multiplayer"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kartRacingImage}
              isBlog={false}
              title="Kart Racing League"
              description="An exciting multiplayer kart racing game with real-time races and kart customization."
              playstoreLink="#"
              technologies={["Unity3D", "C#", "Photon Quantum", "3D Physics"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crystaleImage}
              isBlog={false}
              title="Crystale"
              description="A strategic card game where players summon creatures and cast spells on elemental tiles."
              playstoreLink="#"
              technologies={["Unity3D", "C#", "Colyseus", "TypeScript"]}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
