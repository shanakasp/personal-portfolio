import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/cover.png";
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import { Whatsapp } from "react-bootstrap-icons";
import 'animate.css';
import TrackVisibility from 'react-on-screen';



export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "Web Designer", "UI/UX Designer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
              <span className="tagline" style={{ marginTop: "-100px" , marginBottom: "50px" }}>Welcome to my Portfolio</span>

                <h1>{`Hi! I'm Shanaka Prince`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[  "UI/UX Designer", "Full-stack Developer" ]'><span className="wrap">{text}</span></span></h1>
                  <p>I'm having exeperience with building modern, responsive websites and web applications that not only look great but also deliver seamless user experiences. My goal is to combine creativity with functionality 
                  to craft unique online solutions that leave a lasting impact.</p>
                  <br></br><a
  href="/Shanaka Prince_SE.pdf"
  download="Shanaka Prince_SE.pdf"
  style={{
    marginTop: "20px",
    marginBottom: "10px",
    marginLeft: "0px",
    border: "2px solid white",
    fontSize: "20px",
    padding: "10px",
    color: "white",
    width: "fit-content",
    textDecoration: "none",
    transition: "font-size 0.3s",
  }}
  onMouseEnter={(e) => {
    e.target.style.fontSize = "22px";
  }}
  onMouseLeave={(e) => {
    e.target.style.fontSize = "20px";
  }}
>
  Click here to download my CV
</a>





                  <a href="https://web.whatsapp.com/send?phone=+94769125141" target="_blank"  style={{
   
    

    padding: "10px",
    color: "white",
   

  }}>
  <button onClick={() => console.log('connect')}>Let’s Connect<Whatsapp size={25} /></button>
  
</a>



                  
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
          <TrackVisibility>
  {({ isVisible }) => 
  <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
  <img src={headerImg} alt="Header Img" style={{ marginTop: "20px", marginBottom: "5px" }} />
</div>

  }
</TrackVisibility>

          </Col>
        </Row>
      </Container>
    </section>
  )
}