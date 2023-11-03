import React from 'react'
// import { Link } from 'react-router-dom';
import logo from '../logo.png';
import Contact from './Contact';

const HomeGroup = () => {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Link className='nav_lang' to='/pl'>PL</Link> */}
        <Contact link={'https://t.me/promin_nowosc'} name={'Nowość'} />
        <Contact link={'https://t.me/itaxipromin'} name={'iTaxi'} />
        <Contact link={'https://t.me/Konkursy_Promin'} name={'Konkursy'} />
        <Contact link={'https://t.me/promin'} name={'Główny czat'} />
        <Contact link={'https://t.me/Promin_couriers'} name={'Czat kurierów'} />
        <Contact link={'https://t.me/Arenda_Promin'} name={'Wynajem samochodów'} />
        <Contact link={'https://t.me/BaraholkaPromin'} name={'Targowisko'} />
        <Contact link={'https://t.me/rower_promin'} name={'Wynajem rowerów i skuterów'} />
        <Contact link={'https://t.me/promin_sell_car'} name={'Sprzedaż samochodów'} />
        <Contact link={'https://t.me/Black_list_pp'} name={'Czarna lista'} />
        {/* <Contact link={'https://t.me/Oblawa_ITD'} name={'Oblawa ITD'} /> */}
      </header>
    </div>
  )
}

export default HomeGroup