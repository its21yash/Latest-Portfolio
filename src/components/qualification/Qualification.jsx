import React, { useState } from "react";
import "./qualification.css";

const educationData = [
  {
    title: "Bachelor of Technology",
    subtitle: "Electronics & Communication, UIET Kurukshetra",
    date: "Aug. 2019 - June 2023",
  },
  {
    title: "12th Sr. Secondary",
    subtitle: "M.R.M. Public Sr. Sec. School, Jhajjar",
    date: "2017 - 2018",
  },
  {
    title: "10th Matriculation",
    subtitle: "R.S. Modern Public School, Jhajjar",
    date: "2015 - 2016",
  },
];

const experienceData = [
  {
    title: "Software Developer",
    subtitle: "Zillion Analytics, Gurgaon",
    date: "Dec. 2024 - Present",
  },
  {
    title: "Software Developer Trainee",
    subtitle: "AiClues, Remote",
    date: "June 2024 - Nov. 2024",
  },
  {
    title: "Software Developer Intern",
    subtitle: "POS Solutions Pvt. Ltd., Delhi",
    date: "Sept. 2023 - May 2024",
  },
  {
    title: "React Training Program",
    subtitle: "Internshala",
    date: "June 2022",
  },
];

const QualificationDetails = ({ title, subtitle, date }) => (
  <div>
    <h3 className="qualification__title">{title}</h3>
    <span className="qualification__subtitle">{subtitle}</span>
    <div className="qualification__calendar">
      <i className="uil uil-calendar-alt"> </i> {date}
    </div>
  </div>
);

const QualificationMarker = () => (
  <div>
    <span className="qualification__rounder"></span>
    <span className="qualification__line"></span>
  </div>
);

const QualificationTimeline = ({ items }) => (
  <>
    {items.map((item, index) => {
      const isRightAligned = index % 2 !== 0;

      if (isRightAligned) {
        return (
          <div className="qualification__data" key={item.title + item.date}>
            <div></div>
            <QualificationMarker />
            <QualificationDetails {...item} />
          </div>
        );
      }

      return (
        <div className="qualification__data" key={item.title + item.date}>
          <QualificationDetails {...item} />
          <QualificationMarker />
        </div>
      );
    })}
  </>
);

const Qualification = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabChange = (index) => setActiveTab(index);

  const tabs = [
    { id: 1, label: "Education", icon: "uil-graduation-cap" },
    { id: 2, label: "Experience", icon: "uil-briefcase-alt" },
  ];

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal Journey</span>
      <div className="qualification__container container">
        <div className="qualification__tabs">
          {tabs.map(({ id, label, icon }) => (
            <div
              key={id}
              role="button"
              tabIndex={0}
              aria-label={`Show ${label}`}
              aria-pressed={activeTab === id}
              className={
                activeTab === id
                  ? "qualification__button qualification__active button--flex"
                  : "qualification__button  button--flex"
              }
              onClick={() => handleTabChange(id)}
              onKeyDown={(event) => {
                if (event.key !== "Enter" && event.key !== " ") return;
                event.preventDefault();
                handleTabChange(id);
              }}
            >
              <i className={`uil ${icon} qualification__icon`}></i>
              {label}
            </div>
          ))}
        </div>
        <div className="qualification__sections">
          <div
            className={
              activeTab === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content "
            }
          >
            <QualificationTimeline items={educationData} />
          </div>
          <div
            className={
              activeTab === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content "
            }
          >
            <QualificationTimeline items={experienceData} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
