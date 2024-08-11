import React from "react";
import "./Home.css";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />
          <img src="/assets/profile1.webp" alt="" className="home__img" />
          {/* <div className="home__img"></div> */}
          <Data />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
