import "./introsection.scss";
import ProfileImg from "../../assets/mainpage/profile-pic.jpg";
import {
  Navbar,
  Container,
  Nav,
  Button,
  Col,
  Row,
  Image,
} from "react-bootstrap";

export const IntroSection = () => {
  return (
    <main id="intro" className="mt-5">
      <Container fluid="lg">
        <Row>
          <Col xs={12} md={6}>
            <Image
              src={ProfileImg}
              roundedCircle
              style={{ width: "50%", height: "auto" }}
            />
          </Col>
          <Col xs={12} md={6}>
            <p>Hej! Jag heter</p>
            <p>Zoe KECELI MESAROS</p>
            <p>
              Jag är en fullstack utvecklare med en särskilld passion för
              frontend & design
            </p>
            <Button variant="primary" className="ml-lg-auto">
              Ladda ner CV
            </Button>
            <Button variant="primary" className="ml-lg-auto">
              Säg hej
            </Button>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default IntroSection;
