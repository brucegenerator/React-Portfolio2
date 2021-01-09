import React from "react";
import Button from "./Button/Button";
import { Link } from 'react-router-dom'
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Sign up today to receive the latest updates
        </p>
        <p className="footer-subscription-text">Unsubscribe any time!</p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline">Subscribe!</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About</h2>
            <Link to="/sign-up">Testimonials</Link>
            <Link to="/">Another Thing</Link>
            <Link to="/">More Things</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms of Service</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About</h2>
            <Link to="/sign-up">Testimonials</Link>
            <Link to="/">Another Thing</Link>
            <Link to="/">More Things</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms of Service</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About</h2>
            <Link to="/sign-up">Testimonials</Link>
            <Link to="/">Another Thing</Link>
            <Link to="/">More Things</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms of Service</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
          <div className="social-media-wrap">
              <div className="footer-logo">
                  <Link to="/" className="social-logo">
                      RJMB <i className="fas fa-user-astronaut"></i>
                  </Link>
              </div>
              <small className="website-rights">RJMB &#169;</small>
              <div className="social-icons">
                  <Link className="social-icon-link linkedin"
                    to="/"
                    target="_blank"
                    aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                  </Link>
                  <Link className="social-icon-link github"
                    to="/"
                    target="_blank"
                    aria-label="Github">
                  <i class="fab fa-github"></i>
                  </Link>
              </div>
          </div>
      </section>
    </div>
  );
};

export default Footer;
