import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
  return (
    <div name="about" className="vh-100 bg-light d-flex flex-column justify-content-center align-items-center component-style">
      <div className="container text-center">
        <div className="row">
          <div className="col-lg-8 mx-auto p-4">
            <h1 className="mb-4" style={{fontFamily:"Montserrat"}}>Poznajcie mnie</h1>
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
