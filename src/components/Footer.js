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
            <h1 className='footer-link__contact'>CONTACT</h1>
            <h2 className='contact'>Phone: (540)729-8830</h2>
            <h2 className='contact'>Email: rothj1987@gmail.com</h2>
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
                  <a href='https://www.linkedin.com/in/jonathan-roth-38575047/' className="social-icon-link linkedin" target='_blank' aria-label='linkedIn'>
                  <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a className="social-icon-link github"
                    href="https://github.com/brucegenerator"
                    target="_blank"
                    aria-label="Github">
                  <i class="fab fa-github"></i>
                  </a>
              </div>
          </div>
      </section>
    </div>
  );
};

export default Footer;
