import React from 'react'
import logo from '../logo.png';
import Contact from './Contact';

const Home = () => {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Contact link={'https://t.me/promin_nowosc/9'} name={'Ryczałt'} />
        <Contact link={'https://t.me/promin_nowosc/8'} name={'ZUS'} />
      </header>
    </div>
  )
}

export default Home