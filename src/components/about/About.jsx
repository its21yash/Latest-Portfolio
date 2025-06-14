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
        <img src="/assets/profile1.jpeg" className="about__img" alt="" />
        <div className="about__data">
          <Info />
          <p className="about__description">
            I turn <strong>MVP ideas into scalable SaaS products</strong> with
            Next.js and React. Built an <strong>AI Form Builder</strong> that
            cut form abandonment by 30%—let’s engineer your growth.
          </p>
          <a
            download="Yash-resume.pdf"
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
