import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Netflix from "../../Assets/Projects/NetflixUI.jfif";
import task from "../../Assets/Projects/taskmanager.png";
import editor from "../../Assets/Projects/codeEditor.png";


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
          {/* Netflix Clone */}

          {/* AI Code Reviewer */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="AI Code Reviewer"
              description="AI-powered code review system that analyzes code, identifies issues, and provides improvement suggestions. Features real-time feedback, user authentication, and a web-based interface. Hosted on Render."
              ghLinks={[
                {
                  url: "https://github.com/SanketKolage/AI-code-reviewer-frontend",
                  label: "Frontend",
                },
                {
                  url: "https://github.com/SanketKolage/AI-code-reviewer-backend",
                  label: "Backend",
                },
              ]}
              demoLink="https://ai-code-reviewer-frontend.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={task}
              isBlog={false}
              title="Task Manager App"
              description="A MERN Stack Task Management Project is a web application that allows users to create, manage, and track tasks efficiently.
                It uses MongoDB for data storage, Express.js for server-side operations, React.js for a dynamic front-end interface, and Node.js to handle server logic.
               ."
              ghLinks={[
                {
                  url: "https://github.com/SanketKolage/Task-Manager-Frontend",
                  label: "Frontend",
                },
                {
                  url: "https://github.com/SanketKolage/Task-Manager-Backend",
                  label: "Backend",
                },
              ]}
              demoLink="https://front-end-task-manager.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Netflix}
              isBlog={false}
              title="Netflix  UI Clone"
              description="A Netflix UI clone built with React.js, showcasing a dynamic interface with API-driven content. Features responsive design, Bootstrap styling, and JSON-based data handling."
              demoLink="https://netfix-ui-sanketkolages-projects.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
