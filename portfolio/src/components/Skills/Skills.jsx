import React from "react";
import "./Skills.css";
import Footer from "../Footer";

const skillsData = [
  { name: "HTML", icon: "./assets/techLogo/html.svg" },
  { name: "CSS", icon: "./assets/techLogo/css.svg" },
  { name: "JavaScript", icon: "./assets/techLogo/js.svg" },
  { name: "Bootstrap", icon: "./assets/techLogo/bootstrap.svg" },
  { name: "jQuery", icon: "./assets/techLogo/jquery.svg" },
  { name: "Node.js", icon: "./assets/techLogo/node.svg" },
  { name: "Git", icon: "./assets/techLogo/git.svg" },
  { name: "GitHub", icon: "./assets/techLogo/github.svg" },
  { name: "React.js", icon: "./assets/techLogo/react.svg" },
  { name: "Vite", icon: "./assets/techLogo/vite.svg" },
];

function Skills() {
  return (
    <div className="my-skills">
      <div className="skills-container text-center container">
        <h2 className="mb-4">My Skills</h2>
        <p className="fs-5">
          I have acquired skills in various technologies and tools throughout my
          web development career, I am looking forward to expanding my skill set
          through future projects and collaborations.
        </p>
        <div className="d-flex flex-wrap justify-content-center">
          {skillsData.map((skill, index) => (
            <div key={index} className="mb-3">
              <div className="skill-item">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="img-fluid skill-icon"
                />
                <p className="skill-name">{skill.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
