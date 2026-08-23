import React from "react";

const SkillsGroup = ({ title, skills }) => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">{title}</h3>
      <div className="skills__box">
        <div className="skills__group">
          {skills.map(({ name, level }) => (
            <div className="skills__data" key={name}>
              <i className="bx bx-badge-check"></i>
              <div>
                <h3 className="skills__name">{name}</h3>
                <span className="skills__level">{level}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsGroup;
