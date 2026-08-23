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
            I lead frontend architecture for production SaaS modules —{" "}
            <strong>billing, form automation, and chat</strong> — built with
            Next.js, TypeScript, Zustand, and React Query. I design reusable
            component systems, document engineering standards, and ship{" "}
            <strong>Expo + Next.js monorepos</strong> across web and mobile.
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
