import React from 'react'
import logo from '../logo.png';
import Contact from './Contact';

const HomeEng = () => {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Contact link={'https://t.me/english_news_promin_partner/14'} name={'Ryczałt'} />
        <Contact link={'https://t.me/english_news_promin_partner/15'} name={'ZUS'} />
      </header>
    </div>
  )
}

export default HomeEng