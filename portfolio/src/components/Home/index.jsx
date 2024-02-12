import NavBar from "../Header";
import Contact from "../../pages/Contact";
import ProjectGallery from "../ProjectGallery";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Link } from "react-router-dom";
import Skills from "../Skills/Skills";
import Footer from "../Footer";
import "./Home.css";

function Home() {
  const buttonStyle = {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#81b29a",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };
  return (
    <>
      <div className="home-container">
        <div className="p-5 bg-body-tertiary">
          <div className="py-5 d-flex flex-column justify-content-center align-items-center">
            <h1 className="display-5 fw-bold">
              Hello, I'm Rupesh Front End Developer
            </h1>
            <p className="col-md-12 fs-4 d-flex justify-content-center">
              This is my home page, please go to Project Gallery to view my
              project.
            </p>

            <p className="col-md-12 fs-5 p-4" style={{ textAlign: "center" }}>
              Hello! everyone.
              <br />
              Welcome to my page! This page was created using React. If you want
              to view my work, then please click on the Project Gallery.
              <br />
              Please use the contact tab to get in touch with me if you
              appreciate my work.
              <br />
              Thank you!
            </p>

            <Link
              to="https://docs.google.com/document/d/1gVe8UY1XWWmOqvEdME9ggCC9NrPfDeFkD76jnH1t3S0/edit"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button style={buttonStyle}>Resume</button>
            </Link>
            <br />
            <a
              href="./assets/Resume.pdf" download="Resume.pdf" target="_blank" rel="noreferrer"
              
            >
              <button style={buttonStyle}>Download CV</button>
            </a>
          </div>
        </div>
      </div>
      <Skills />
    </>
  );
}

export default Home;
