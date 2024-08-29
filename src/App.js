import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar.js'
import Home from './components/Home/Home.js';
import Shop from './components/Shop/Shop.js';
import { CartProvider } from './context/CartContext';


function App() {
  return (
    <CartProvider>
      <div className="App">
        <Navbar />
          <Routes>        
            <Route path="/"  element={<Home />} />
            <Route path="/Shop"  element={<Shop />}/>
          </Routes>
      </div>
    </CartProvider>
  );
}

export default App;
