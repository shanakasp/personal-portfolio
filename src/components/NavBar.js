import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.png';
import me from '../assets/img/me.jpeg'
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from '../assets/img/nav-icon4.svg';
import navIcon5 from '../assets/img/nav-icon5.svg';
import navIcon6 from '../assets/img/nav-icon6.svg';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
        <Navbar.Brand href="/">
  <div style={{ border: '2px solid white', padding: '', display: 'inline-block' }}>
    <img src={me} alt="PRINCE SP" />
  </div>
</Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
              <a href="https://www.linkedin.com/in/shanaka-prince-810400226/" target="_blank" rel="noopener noreferrer">
  <img src={navIcon1} alt="Icon" />
</a>

<a href="https://github.com/shanakasp" target="_blank" rel="noopener noreferrer">
  <img src={navIcon4} alt="Icon" style={{ filter: 'brightness(0) invert(1)', color: 'white' }} />
</a>

<a href="https://web.facebook.com/shanaka.prince" target="_blank" rel="noopener noreferrer">
  <img src={navIcon2} alt="Icon" />
</a>

<a href="https://www.behance.net/shanaka" target="_blank" rel="noopener noreferrer">
  <img src={navIcon5} alt="Icon" style={{ filter: 'brightness(0) invert(1)', color: 'white' }} />
</a>
<a href="https://www.instagram.com/shanakaprince/" target="_blank" rel="noopener noreferrer">
  <img src={navIcon3} alt="Icon" />
</a>

<a href="https://medium.com/@shanakaprince" target="_blank" rel="noopener noreferrer">
  <img src={navIcon6} alt="Icon" style={{ filter: 'brightness(0) invert(1)', color: 'white' }} />
</a>
              </div>
              <HashLink to='#connect'>
                <button className="vvd"><span>Let’s Connect</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
