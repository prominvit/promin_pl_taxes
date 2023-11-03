import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import HomeGroup from './components/HomeGroup';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/groups" element={<HomeGroup />} />
      </Routes>
    </div>
  );
}

export default App;
