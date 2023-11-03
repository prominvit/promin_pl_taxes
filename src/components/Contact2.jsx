import React from 'react';
import './contact.scss';

function Contact2({ link, icon }) {
  return (
    <div>
      <a className="contacts1" href={link}>
        <img className="media" src={icon} alt="icon" />
      </a>
    </div>
  );
}

export default Contact2;
