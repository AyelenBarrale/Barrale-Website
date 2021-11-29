import React from "react";
import "../WhatDo/WhatDo.scss";

const WhatDo = () => {
  return (
    <div className='doContainer'>
      <h1>What I do?</h1>
      <div className='fieldsContainer'>
        <div className='field'>
          <i className='fas fa-laptop-code fa-2x'></i>
          <h2>Website</h2>
          <p>
            I like to code things from scratch, and enjoy bringing ideas to life
            in the browser.
          </p>
        </div>
        <div className='field'>
          <i className='far fa-window-restore fa-2x'></i>
          <h2>SEO positioning</h2>
          <p>
            Through SEO positioning techniques, I help more companies and
            entrepreneurs to increase their presence in search engines
            organically.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatDo;
