import React from "react";

const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title">
        Yashpal{" "}
        <img src="/assets/hi-icon.svg" alt="hi-icon" className="inline-block" />
      </h1>
      <h3 className="home__subtitle">Software Engineer</h3>
      <p className="home__description">
        <strong>3+ years</strong> building scalable web and mobile products. I
        lead frontend architecture with{" "}
        <strong>Next.js, React, TypeScript, and Expo</strong> — from reusable
        component systems to production deployment.
      </p>
      <a
        href="tel:+918607698362"
        target="_blank"
        rel="noopener noreferrer"
        className="button button--flex say-hello-box"
      >
        Say Hello{" "}
        <img
          src="/assets/send-icon.svg"
          alt="send icon"
          className="say-hello"
        />
      </a>
    </div>
  );
};

export default Data;
