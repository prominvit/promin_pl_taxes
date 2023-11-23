import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import HomeGroup from './components/HomeGroup';
import HomeGroupEng from './components/HomeGroupEng';
import HomeGroupUZB from './components/HomeGroupUZB';
import HomeMedia from './components/HomeMedia';
import UzbTaxes from './components/UzbTaxes';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/groups" element={<HomeGroup />} />
        <Route exact path="/media" element={<HomeMedia />} />
        <Route exact path="/eng_group" element={<HomeGroupEng />} />
        <Route exact path="/uz_group" element={<HomeGroupUZB />} />
        <Route exact path="/uz_taxes" element={<UzbTaxes />} />
      </Routes>
    </div>
  );
}

export default App;
