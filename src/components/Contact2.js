import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

import contactImg from "../assets/img/contact-img.svg";
import icon1 from "../assets/img/icon1.png"
import icon2 from "../assets/img/icon2.png"
import icon3 from "../assets/img/icon3.png"

export const Contact = () => {

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col className="center-horizontal" size={12} md={6}>
            <div className="box">
            <p className="title">Faça contato intergaláctico!</p>
              <div className="contact2 box1">
                <img src={icon1}/>
                <p>fernandam04@outlook.com</p>
              </div>
              <div className="contact2 box2">
                <img src={icon2}/>
                <p>(98) 983322126</p>
              </div>
              <div className="contact2 box3">
                <img src={icon3}/>
                <p><a href="https://wa.me/5598983322126" target="_blank">Fale comigo pelo WhatsApp.</a></p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
