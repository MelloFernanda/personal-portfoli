import { NavBar, Container } from "react-bootstrap";

export const NavBar = () => {
    return(
        <NavBar bg="light" expand="lg">
            <Container>
                <NavBar.Brand>
                    <img src={} alt="Logo"/>
                </NavBar.Brand>
                <NavBar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </NavBar.Toggle>
                <NavBar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#skills">Skills</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                    </Nav>
                    <span className="navbar-text1">
                        <div className="social-icon">
                            <a href="#"><img src={} alt=""/></a>
                            <a href="#"><img src={} alt=""/></a>
                            <a href="#"><img src={} alt=""/></a>
                        </div>
                        <button className="vvd" onClick={() => console.log('connect')}>
                            <span>Let's Connect</span></button>
                    </span>
                </NavBar.Collapse>
            </Container>
        </NavBar>
    )
}