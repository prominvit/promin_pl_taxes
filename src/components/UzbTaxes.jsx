import React from 'react'
// import { Link } from 'react-router-dom';
import logo from '../logo.png';
import Contact from './Contact';

const UzbTaxes = () => {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Link className='nav_lang' to='/pl'>PL</Link> */}
        <Contact link={'https://t.me/uz_news_promin/7'} name={'Ryczałt'} />
        <Contact link={'https://t.me/uz_news_promin/17'} name={'ZUS'} />
      </header>
    </div>
  )
}

export default UzbTaxes