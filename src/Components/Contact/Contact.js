import React from "react";
import "../Contact/Contact.scss";

const Contact = () => {
  return (
    <div className='contactContainer' id='contact'>
      <h1>Just say hi!</h1>
      <h3>
        I&apos;m always open to discuss your project and talk about new things.
      </h3>
      <div className='mailme'>
        <h4>Mail me at</h4>
        <a
          href='mailto:ayebarrale@gmail.com'
          rel='noreferrer'
          target='_blank'
          className='link mailFooter'
        >
          ayebarrale@gmail.com
        </a>
      </div>
      <div className='followme'>
        <h4>Follow me:</h4>
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
    </div>
  );
};

export default Contact;
