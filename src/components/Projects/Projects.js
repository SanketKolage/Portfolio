import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Netflix from "../../Assets/Projects/NetflixUI.jfif";
import Chat from "../../Assets/Projects/ChatUIDesign.jfif";
import ecommerce from "../../Assets/Projects/eCommerce Website.jfif";


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
              imgPath={Netflix}
              isBlog={false}
              title="Netflix clone using react js"
              description="Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices. try to clone the Netflix website.  - React js | API | JSON | Bootstrap"
              // ghLink=""
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Chat}
              isBlog={false}
              title="Real time Chat application using react js"
              description="In the app, we will allow the user to log in with their Google account using Firebase's Google
sign-in Authentication. We will also store and retrieve all the chatroom messages using
Firebase's Cloud Firestore - JavaScript | Node.js | Socket.io |Bootstrap"
              // ghLink=""
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="E-commerce website"
              description="This e-commerce website is a modern, responsive web application built with React, designed to provide a seamless and intuitive shopping experience. Users can browse and search for products, manage their shopping cart.  Leveraging the latest React features, this project ensures a dynamic and efficient user experience."
              // ghLink=""
              // demoLink=""              
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
