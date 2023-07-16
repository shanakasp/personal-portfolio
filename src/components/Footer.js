import { Container, Row, Col } from "react-bootstrap";
import logo2 from "../assets/img/logo2.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";
import navIcon5 from "../assets/img/nav-icon5.svg";
import navIcon6 from "../assets/img/nav-icon6.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo2} alt="Logo" style={{
                  marginTop: "10px",}}/>  {/* Add the "Click here" text */}
 


          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end" style={{
                  marginTop: "30px",}}>
            <div className="social-icon"> 
              <a
                href="https://www.linkedin.com/in/shanaka-prince-810400226/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon1} alt="Icon" />
              </a>
             
              <a
                href="https://github.com/shanakasp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={navIcon4}
                  alt="Icon"
                  style={{ filter: "brightness(0) invert(1)", color: "white" }}
                />
              </a>
              <a
                href="https://web.facebook.com/shanaka.prince"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon2} alt="Icon" />
              </a>
              <a
                href="https://www.behance.net/shanaka"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={navIcon5}
                  alt="Icon"
                  style={{ filter: "brightness(0) invert(1)", color: "white" }}
                />
              </a>
              <a
                href="https://www.instagram.com/shanakaprince/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon3} alt="Icon" />
              </a>
              <a
                href="https://medium.com/@shanakaprince"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={navIcon6}
                  alt="Icon"
                  style={{ filter: "brightness(0) invert(1)", color: "white" }}
                />
              </a>
            </div>
            <p  style={{
   
    marginRight: "10px",
  
  }}>Thisara Shanaka Prince</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
