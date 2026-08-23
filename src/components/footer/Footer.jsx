import React from "react";
import "./footer.css";

const footerSocialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/its21yash",
    icon: "bxl-github",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/its21yash/",
    icon: "bxl-linkedin",
  },
  {
    label: "X",
    href: "https://x.com/lifeof21yash",
    icon: "bxl-twitter",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/its21yash/",
    icon: "bxl-instagram",
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Yash</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#qualification" className="footer__link">
              Qualification
            </a>
          </li>
        </ul>
        <div className="footer__social">
          {footerSocialLinks.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              className="footer__social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              title={label}
            >
              <i className={`bx ${icon}`}></i>
            </a>
          ))}
        </div>

        <span className="footer__copy">
          &#169; its21yash. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
