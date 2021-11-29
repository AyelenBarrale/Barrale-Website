import React from "react";
import "../Skills/Skills.scss";

const Skills = () => {
  return (
    <div className='skillsContainer' id="skills">
      <h1>Skills</h1>
      <div className='frontSkills'>
        <div className='skill'>
          <i className='fab fa-html5 fa-2x'></i>
          <h2>HTML 5</h2>
        </div>
        <div className='skill'>
          <i className='fab fa-css3-alt fa-2x'></i>
          <h2>CSS 3</h2>
        </div>
        <div className='skill'>
          <i className='fab fa-bootstrap fa-2x'></i>
          <h2>Bootstrap</h2>
        </div>
        <div className='skill'>
          <i className='fab fa-js-square fa-2x'></i>
          <h2>Javascript</h2>
        </div>
        <div className='skill'>
          <i className='fab fa-react fa-2x'></i>
          <h2>React JS</h2>
        </div>
      </div>
      <div className='line'></div>
      <div className='backSkills'>
        <div className='skill'>
          <i className='fab fa-node-js fa-2x'></i>
          <h2>Node JS</h2>
        </div>
        <div className='skill'>
          <i className='fas fa-cloud-upload-alt fa-2x'></i>
          <h2>API Rest</h2>
        </div>
        <div className='skill'>
          <i className='fas fa-database fa-2x'></i>
          <h2>MySQL</h2>
        </div>
        <div className='skill'>
          <i className='fas fa-database fa-2x'></i>
          <h2>MongoDB</h2>
        </div>
        <div className='skill'>
          <i className='fas fa-server fa-2x'></i>
          <h2>Nginx</h2>
        </div>
        <div className='skill'>
          <i className='fas fa-window-restore fa-2x'></i>
          <h2>Heroku</h2>
        </div>
      </div>
    </div>
  );
};

export default Skills;
