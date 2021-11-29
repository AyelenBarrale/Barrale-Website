import React from "react";
import "../Footer/Footer.scss";

function Footer() {
  return (
    <div className='FooterContainer'>
      <div className='leftFooter'>
        <a
          href='https://www.linkedin.com/in/ayelenbarrale/'
          rel='noreferrer'
          target='_blank'
        >
          <i className='fab fa-linkedin fa-lg'></i>
        </a>
        <a
          href='https://github.com/AyelenBarrale'
          rel='noreferrer'
          target='_blank'
        >
          <i className='fab fa-github fa-lg'></i>
        </a>
      </div>
      <p className='copyright'>Copyright © 2021. All rights reserved</p>
      <a
        href='mailto:ayebarrale@gmail.com'
        rel='noreferrer'
        target='_blank'
        className='link mailFooter'
      >
        ayebarrale@gmail.com
      </a>
    </div>
  );
}

export default Footer;
