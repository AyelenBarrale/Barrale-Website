import React from "react";
import "../Works/Works.scss";

import { Link } from "react-router-dom";

const Work = ({ project }) => {
  return (
    <div className='work'>
      <Link to={`/work/${project.id}`}>
        <h3>{project.nombre} </h3>
        <img src={project.portada} alt={project.nombre} />
      </Link>
    </div>
  );
};

export default Work;
