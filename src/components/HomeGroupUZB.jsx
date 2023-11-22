import React from 'react'
// import { Link } from 'react-router-dom';
import logo from '../logo.png';
import Contact from './Contact';

const HomeGroupUZB = () => {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Link className='nav_lang' to='/pl'>PL</Link> */}
        <Contact link={'https://t.me/uz_news_promin'} name={'Янгиликлар'} />
        <Contact link={'https://t.me/uz_news_promin/17'} name={'iTaxi'} />
        <Contact link={'https://t.me/events_uz'} name={'Конкурслар'} />
        <Contact link={'https://t.me/eng_promin'} name={'Ҳайдовчилар чати'} />
        <Contact link={'https://t.me/Promin_couriers'} name={'Курьерлар чати'} />
        <Contact link={'https://t.me/Arenda_Promin'} name={'Автомобил ижараси'} />
        <Contact link={'https://t.me/BaraholkaPromin'} name={'Бозор'} />
        <Contact link={'https://t.me/rower_promin'} name={'Велосипед ва скутер ижараси'} />
        <Contact link={'https://t.me/promin_sell_car'} name={'Автомобил олиб/сотиш'} />
        <Contact link={'https://t.me/Black_list_pp'} name={'Қора рўйхат'} />
        <Contact link={'https://t.me/Oblawa_ITD'} name={'Oblawa ITD'} />
      </header>
    </div>
  )
}

export default HomeGroupUZB