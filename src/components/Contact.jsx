import React from 'react'
import './contact.scss';

function Contact({link, name}) {
  return (
    <div>
        <a className='contacts' href={link}>{name}</a>
    </div>
  )
}

export default Contact