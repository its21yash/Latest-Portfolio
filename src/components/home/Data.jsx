import React from "react";

const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title">
        Yashpal <img src="/assets/hi-icon.svg" alt="hi-icon" />
      </h1>
      <h3 className="home__subtitle">Web developer</h3>
      <p className="home__description">
        Skilled web developer with a knack for building responsive,
        user-friendly websites and contributing to innovative web solutions.
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
