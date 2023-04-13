import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom"

import Home from './pages/home';
import Product from './pages/product';
import Cart from './pages/cart';
import DefaultLayout from './layout/defaultLayout';
function App() {
  return (
    <div>
      <DefaultLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      </DefaultLayout>
    </div>
  );
}

export default App;
