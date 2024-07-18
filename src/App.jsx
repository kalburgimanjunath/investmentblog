import './App.css';
import { Header } from './components';
import { Home, FO } from './pages';
import { Routes, Route } from 'react-router-dom';
import Stocks from './pages/stocks';
import MutualFunds from './pages/mutualfunds';
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/mutualfunds" element={<MutualFunds />} />
        <Route path="/stocks" element={<Stocks />} />
        <Route path="/fo" element={<FO />} />
        <Route path="/home" element={<Home />} />
        <Route path="./*" exact element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
