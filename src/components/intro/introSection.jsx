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
          <Col>
            <Image
              src={ProfileImg}
              roundedCircle
              style={{ width: "50%", height: "auto" }}
            ></Image>
          </Col>
          <Col xs={6}>2 of 2 (wider)</Col>
        </Row>
      </Container>
    </main>
  );
};

export default IntroSection;
