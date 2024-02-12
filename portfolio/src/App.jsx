import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HashRouter as Router, Route, Routes } from 'react-router-dom'

import "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from "bootstrap"; // Import all of Bootstrap's JS

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./pages/About";
import ProjectGallery from "./components/ProjectGallery/ProjectGallery";
import Contact from "./pages/Contact";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <div style={{minHeight:"calc(100vh - 80px)"}}>

        <Header />
        {/* <Navbar /> */}

        {/* Wrap Route elements in a Routes component */}
        <Routes>
          {/* Define routes using the Route component to render different page components at different paths */}
          {/* Define a default route that will render the Home component */}
          <Route path="/" element={<Home />} />
         
          <Route path="/project" element={<ProjectGallery />} />
          {/* Define a route that will have descendant routes */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
        </div>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
