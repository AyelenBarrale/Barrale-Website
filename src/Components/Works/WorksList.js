import React from "react";
import "../Works/Works.scss";
import Work from "./Work.js";

const WorksList = ({ works }) => {
  return (
    <div className='workgrid'>
      {works.map((work) => (
        <div key={work.id}>
          <Work project={work} />
        </div>
      ))}
    </div>
  );
};

export default WorksList;

