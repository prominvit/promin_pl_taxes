import logo from '../logo.png';
import tiktok from '../tiktok.png' 
import inst from '../inst.png' 
import youtube from '../youtube.png' 
import news from '../news.png' 
import './media.scss';
import Contact2 from './Contact2';

function HomeMedia() {
  return (
      <header className="App-header">
        <a href='https://t.me/promin'><img src={logo} className="App-logo" alt="logo" /></a>
        <Contact2 link={'https://www.tiktok.com/@promin_partner'} icon={tiktok} />
        <Contact2 link={'https://www.instagram.com/promin_partner/'} icon={inst} />
        <Contact2 link={'https://www.youtube.com/@Promin_Partner'} icon={youtube} />
        <Contact2 link={'https://t.me/promin_nowosc'} icon={news} />
      </header>
  );
}

export default HomeMedia;
