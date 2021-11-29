import React, { useState, useEffect } from "react";
import "../WorkDetail/WorkDetail.scss";

import { useParams } from "react-router";

import { db } from "../../firebase.js";

const WorkDetail = () => {
  const [work, setWork] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const trabajo = await db.collection("trabajos").doc(id).get();
      setWork({ id: trabajo.id, ...trabajo.data() });
    })();
  }, [id]);

  return (
    <div className='detailContainer'>
      <h1>{work.nombre}</h1>
      <h3>{work.descripcion}</h3>
      <img src={work.gif} alt={work.nombre} />
    </div>
  );
};

export default WorkDetail;
