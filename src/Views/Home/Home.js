import React from "react";
//import Building from "../../Components/Building/Building";
import Contact from "../../Components/Contact/Contact";
import Presentation from "../../Components/Presentation/Presentation";
import Skills from "../../Components/Skills/Skills";
import WhatDo from "../../Components/WhatDo/WhatDo";
import Works from "../../Components/Works/Works";
import "../Home/Home.scss";

function Home() {
  return (
    <div className='homeContainer'>
      {/* <Building /> */}
      <Presentation />
      <WhatDo />
      <Skills />
      <Works />
      <Contact />
    </div>
  );
}

export default Home;
