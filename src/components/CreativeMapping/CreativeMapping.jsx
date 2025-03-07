import React from "react";
import "./CreativeMapping.css";
import logo from "../../assets/logo.jpg"; // Make sure to have a logo in `src/assets/`
import hero from "../../assets/hero.jpg"; // Make sure to have a hero image

const CreativeMapping = () => {
  return (
    <div className="creative-container">
      {/* Navbar Section */}
      <nav className="navbar">
        <img src={logo} alt="Creative Mapping Logo" className="logo" />
        <ul className="nav-links">
          <li><a href="#about">Example</a></li>
          <li><a href="#services">Example</a></li>
          <li><a href="#testimonials">Example</a></li>
          <li><a href="#contact">Example</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">
  <img src={hero} alt="Hero" className="hero-image" />
  <div className="hero-content">
    <h1 className="headline">Lorem ipsum</h1>
    <p className="description">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
    <button className="cta-button">Lorem ipsum 🚀</button>
  </div>
</section>

      {/* Summary of Benefits Section */}
      <section className="summary" id="about">
        <h2>Lorem ipsum?</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </section>

      {/* Social Proof Section */}
      <section className="social-proof" id="testimonials">
        <h2>Lorem ipsum</h2>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit" - Alex T.</p>
        <p>" Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat!" - Emily R.</p>
      </section>

      {/* Additional Info Section */}
      <section className="additional-info" id="services">
        <h2>Lorem ipsum</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..</p>
      </section>

      {/* Footer Section */}
      <footer className="footer" id="contact">
        <p>&copy; 2025 Lorem ipsum. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default CreativeMapping;
