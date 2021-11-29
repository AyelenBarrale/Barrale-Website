import React, { useState, useEffect } from "react";
import "../Works/Works.scss";

import { db } from "./../../firebase.js";
import WorksList from "./WorksList.js";

const Works = () => {
  const [works, setWorks] = useState([]);

  useEffect(() => {
    (async () => {
      const trabajos = await db.collection("trabajos").get();
      setWorks(trabajos.docs.map((work) => ({ id: work.id, ...work.data() })));
      console.log(works);
    })();
  },[]);


  return (
    <div className='worksContainer' id="works">
      <h1>Portfolio</h1>
      <WorksList works={works} />
    </div>
  );
};

export default Works;
