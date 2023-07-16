import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import pr1 from "../assets/img/pr1.png"
import pr2 from "../assets/img/pr2.png"
import pr3 from "../assets/img/pr3.png"
import pr4 from "../assets/img/pr4.png"
import pr5 from "../assets/img/pr5.png"
import pr6 from "../assets/img/pr6.png"

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Hotel Booking System",
      description: "React, Spring Boot and PostgreSQL",
      imgUrl: pr1,
    },
    {
      title: "Book Store Management System",
      description: "Thymeleaf, Spring Boot and PoostgreSQL",
      imgUrl: pr2,
    },
    {
      title: "Student Management System",
      description: "React, Spring Boot and MongoDB",
      imgUrl: pr3,
    },
    {
      title: "Employee Management System",
      description: "React, Spring Boot and PosgreSQL",
      imgUrl: pr4,
    },
    {
      title: "My portfolio",
      description: "React",
      imgUrl: pr5,
    },
    {
      title: "Currency exchanger",
      description: "React and exchangerate API",
      imgUrl: pr6,
    },
    
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>All these projects are full-stack web applications that leverages Reactor angular Spring Boot with necessary
 data approach to create a dynamic and responsive user interface. The frontend is built using React or Angular, allowing for a modular and 
 component-based design. The backend is powered by Spring Boot, providing a robust and scalable server-side framework. Together, these 
 technologies enable seamless integration between the frontend and backend, delivering a high-performance and feature-rich web application. 
 According to the user aspects database approach may vary. </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                  <Nav.Item>
  <Nav.Link eventKey="first" style={{ cursor: 'pointer' }}>
    Completed Projects
  </Nav.Link>
</Nav.Item>

                    <Nav.Item>
                      <Nav.Link eventKey="second" style={{ cursor: 'pointer' }}>Current Services</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third" style={{ cursor: 'pointer' }}>About myself</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Java - Spring Boot <br></br> React & Angular - HTML, CSS, Javascript <br></br> MySQL, PostgreSQL, MongoDB <br></br> Figma & XD UI designs</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Undergratuate student from University of Moratuwa faculty of IT. </p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
