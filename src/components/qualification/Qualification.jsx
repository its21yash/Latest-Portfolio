import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal Journey</span>
      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button  button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button  button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>
        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content "
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Bachelor of Technology</h3>
                <span className="qualification__subtitle">
                  UIET, Kurukshetra
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt "> </i> 2019 - 2023
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">12th Sr. Secondary</h3>
                <span className="qualification__subtitle">
                  M.R.M. Public Sr. Sec. School, Jhajjar
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt "> </i> 2017 - 2018
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">10th Matriculation</h3>
                <span className="qualification__subtitle">
                  R.S. Modern Public School, Jhajjar
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt "> </i> 2015 - 2016
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            {/* <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">UX Expert</h3>
                <span className="qualification__subtitle">UIET</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt "> </i> 2021 - 2022
                </div>
              </div>
            </div> */}
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content "
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Frontend Developer</h3>
                <span className="qualification__subtitle">
                  Ninjaas Internet
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt "></i>Jan - Feb 2024
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Frontend Developer</h3>
                <span className="qualification__subtitle">
                  The Nature First Supplement
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt "> </i> July - Sept. 2023
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">React Training Program</h3>
                <span className="qualification__subtitle">Internshala</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt "> </i> June 2022
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Web Developer Intern</h3>
                <span className="qualification__subtitle">
                  The Sparks Foundation
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt "> </i> May 2021
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
