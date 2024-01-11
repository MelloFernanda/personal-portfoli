import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {logos} from "../data/logos.js"

import meter1 from "../assets/img/meter1.png";
import meter2 from "../assets/img/meter2.png";
import meter3 from "../assets/img/meter3.png";
import meter4 from "../assets/img/meter4.png";


import colorSharp from "../assets/img/color-sharp.png"
import { SkillLogo } from "./SkillLogo";

export const Skills = () => {
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };
  
    return (
      <section className="skill" id="skills">
          <div className="container">
              <div className="row">
                  <div className="col-12">
                      <div className="skill-bx wow zoomIn">
                          <h2>Skills</h2>

                          <Container className="logos">
                            <div className="text-logo"><p>As principais linguagens e tecnologias nas quais tenho conhecimento/experiência são:</p></div>
                          
                            <div className="logo-skills">
                              
                            
                        {
                          logos.map((logo, index) => {
                            return (
                              <SkillLogo
                                key={index}
                                {...logo}
                                />
                            )
                          })
                        }

                            </div>
                          </Container>

                          <p>Minhas principais habilidades estão detalhadas abaixo.<br></br>Explore e descubra como minha experiência pode agregar valor ao seu projeto ou equipe.</p>
                          <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                              <div className="item">
                                  <img src={meter2} alt="Image" />
                                  <h5>Cientista de Dados</h5>
                              </div>
                              <div className="item">
                                  <img src={meter3} alt="Image" />
                                  <h5>BI Development</h5>
                              </div>
                              <div className="item">
                                  <img src={meter2} alt="Image" />
                                  <h5>Front-end Development</h5>
                              </div>
                              <div className="item">
                                  <img src={meter1} alt="Image" />
                                  <h5>Web Design</h5>
                              </div>
                          </Carousel>
                      </div>
                  </div>
              </div>
          </div>
          <img className="background-image-left" src={colorSharp} alt="Image" />
      </section>
    )
  }
  