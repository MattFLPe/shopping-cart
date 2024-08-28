import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar.js'
import Home from './components/Home/Home.js';
import Shop from './components/Shop/Shop.js';


function App() {
  return (
    <div className="App">
      <Navbar />
          <Routes>        
            <Route path="/"  element={<Home />} />
            <Route path="/Shop"  element={<Shop />}/>
          </Routes>
    </div>
  );
}

export default App;
