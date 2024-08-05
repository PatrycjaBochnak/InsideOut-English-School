import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import * as Icons from "react-bootstrap-icons";
import Footer from "../layout/Footer";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Contact = () => {
  return (
    <div name="contact" className="component-style" style={{ minHeight: "85vh", marginTop: "115px" }}>
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h1 className="heading-custom mb-5 mt-5">Kontakt</h1>
            <p className="lead text-gray-700 mb-3" style={{ maxWidth: "80%", margin: "0 auto" }}>
              Wypełnij formularz kontaktowy by wysłać bezpośrednio do mnie
              wiadomość lub skontaktuj się ze mną za pomocą maila -{" "}
              <span className="font-weight-bold" style={{ fontWeight: "bold" }}>
                biuro@szkolainsideout.pl
              </span>
            </p>
          </Col>
        </Row>
        <Row className="justify-content-between">
          <Col lg={6} className="contact-info">
            <div className="d-flex flex-column" style={{ fontSize: "20px" }}>
              <p className="d-inline-flex align-items-center mb-2">
                <Icons.TelephoneFill className="me-2" /> +48 727-938-163
              </p>
              <p className="d-inline-flex align-items-center mb-2">
                <Icons.EnvelopeArrowUpFill className="me-2" /> biuro@szkolainsideout.pl
              </p>
              <p className="fw-bold mt-3" style={{ fontSize: "30px", color: "#80348b" }}>
                InsideOut English Academy
              </p>
              <p className="d-inline-flex align-items-center mb-2">
                <Icons.GeoAltFill className="me-2" /> ul. Wielkopolska 68 lokal U5
              </p>
              <p style={{ marginLeft: "25px" }}>80-180 Gdańsk</p>
            </div>
          </Col>
          <Col lg={6}>
            <Form
              action="https://getform.io/f/alljejla"
              method="POST"
              className="p-4 shadow-sm rounded bg-light mb-5"
              style={{ maxWidth: "600px", width: "100%" }}
            >
              <Form.Group controlId="formName" className="mb-3">
                <Form.Control type="text" name="full-name" placeholder="Twoje imię" required />
              </Form.Group>
              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Control type="email" name="email" placeholder="Twój email" required />
              </Form.Group>
              <Form.Group controlId="formMessage" className="mb-3">
                <Form.Control as="textarea" name="message" rows={3} placeholder="Twoja wiadomość" required />
              </Form.Group>
              <Form.Control type="hidden" name="_gotcha" style={{ display: "none !important" }} />
              <Button variant="primary" type="submit" className="w-100">
                Wyślij
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Contact;