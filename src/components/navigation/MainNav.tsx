import React from "react";
import {
  Navbar,
  Container,
  Nav,
  Button,
  Col,
  Row,
  Image,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./mainnav.scss";
import Ukflag from "../../assets/mainpage/uk.png";
import Sweflag from "../../assets/mainpage/swe.png";

function Navsection() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-between"
        >
          <Nav className="mx-auto">
            <Nav.Link href="#home">Hem</Nav.Link>
            <Nav.Link href="#project">Projekt</Nav.Link>
            <Nav.Link href="#about">Om mig</Nav.Link>
            <Nav.Link href="#skill">Kompetens & Profil</Nav.Link>
          </Nav>
          <Col xs={2} md={1}>
            <Image
              src={Sweflag}
              fluid
              rounded
              style={{ width: "30%", height: "auto" }}
            />
          </Col>
          <Col xs={2} md={1}>
            <Image
              src={Ukflag}
              fluid
              rounded
              style={{ width: "30%", height: "auto" }}
            />
          </Col>
          <Button variant="primary" className="ml-lg-auto">
            Kontakta mig
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navsection;
