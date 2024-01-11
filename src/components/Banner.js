import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";

import headerImg from "../assets/img/header-img.png"
import { useEffect, useState } from "react";

export const Banner = () => {

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["BI Developer", "Front-end developer", "UI/UX Designer"];
    const [text, setText] = useState('');
    const [index, setIndex] = useState(1);
    const [delta, setDelta] = useState(300 - Math.random * 100) ;
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

    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Bem-vindo ao meu portifólio</span>
                        <h1>{`Oi, sou a Fernanda: `}<spam className="wrap"><br></br>{text}</spam></h1>
                        <p>Olá! Sou uma entusiasta de desenvolvimento, apaixonada por desafios cósmicos e pronta para explorar novos horizontes.<br></br>Minha abordagem é minuciosa, 'cricri' quando se trata de estética, pois acredito que cada detalhe importa, assim como as estrelas que compõem o universo. Encaro a vida como uma jornada intergaláctica, onde o pior medo é permanecer com receio das mudanças. Estou pronta para romper com fronteiras e abraçar o desconhecido, pois, afinal, a verdadeira transformação só acontece quando ousamos mudar.</p>
                        <button onClick={() => console.log('connect')}>Vamos nos conectar? <ArrowRightCircle size={25}/> </button>
                    </Col>
                    <Col s={12} md={6} xl={5}>
                        <img src={headerImg} alt="Headder Img"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}