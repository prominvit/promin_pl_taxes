import React from 'react'
// import { Link } from 'react-router-dom';
import logo from '../logo.png';
import Contact from './Contact';

const HomeGroupEng = () => {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Link className='nav_lang' to='/pl'>PL</Link> */}
        <Contact link={'https://t.me/promin_nowosc'} name={'News'} />
        <Contact link={'https://t.me/itaxipromin'} name={'iTaxi'} />
        <Contact link={'https://t.me/Konkursy_promin_pl'} name={'Events'} />
        <Contact link={'https://t.me/eng_promin'} name={'Main Eng Chat'} />
        <Contact link={'https://t.me/Promin_couriers'} name={'Chat of couriers'} />
        <Contact link={'https://t.me/Arenda_Promin'} name={'Rent a car'} />
        <Contact link={'https://t.me/BaraholkaPromin'} name={'Marketplace'} />
        <Contact link={'https://t.me/rower_promin'} name={'Rent Bicycle and Motorbike'} />
        <Contact link={'https://t.me/promin_sell_car'} name={'Car sale'} />
        <Contact link={'https://t.me/Black_list_pp'} name={'Black list'} />
        {/* <Contact link={'https://t.me/Oblawa_ITD'} name={'Oblawa ITD'} /> */}
      </header>
    </div>
  )
}

export default HomeGroupEng