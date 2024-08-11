import React from "react";
import "./about.css";
import CV from "../../assets/Yash-resume.pdf";
import Info from "./Info";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My introduction</span>
      <div className="about__container container grid">
        <img src="/assets/profile1.webp" className="about__img" alt="" />
        <div className="about__data">
          <Info />
          <p className="about__description">
            Frontend developer with expertise in creating dynamic web pages and
            intuitive UI/UX interfaces. Explore my portfolio to see how I bring
            ideas to life through clean code and compelling design.
          </p>
          <a
            download="Yash resume.pdf"
            href={CV}
            className="button button--flex"
          >
            Download CV
            <img
              src="/assets/downloads.svg"
              alt="download"
              className="download-icon"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
