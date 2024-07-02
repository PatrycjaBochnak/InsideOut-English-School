import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactForm from "../components/ContactForm";
import * as Icons from "react-bootstrap-icons";

const Contact = () => {
  return (
    <div
      name="contact"
      className="vh-98 bg-light d-flex flex-column justify-content-center align-items-center component-style"
    >
      <h1 style={{ fontFamily: "Montserrat" }}>Kontakt</h1>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-6 lead">
            Zostaw wiadomość wypełniając formularz kontaktowy po prawej stronie
            lub skontaktuj się ze mną w inny wygodny dla Ciebie sposób.
            <div className="d-flex flex-column mt-5">
              <p className="fw-bold">Kontakt</p>
              <p>
                {" "}
                <Icons.TelephoneFill /> Telefon: 515822952
              </p>{" "}
              <p>
                {" "}
                <Icons.EnvelopeArrowUpFill /> Email: admin@admin.pl
              </p>
              <p>Elefoncik Sp. z.o.o. </p>{" "}
              <p>
                {" "}
                <Icons.GeoAltFill />
                ul. Elefoncik 4A
              </p>{" "}
              <p>80-200 Gdańsk</p>
            </div>
          </div>
          <div className="col-lg-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
