import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ProductsPage from './components/ProductsPage';
import ProductPage from './components/ProductPage';
import CartPage from './components/CartPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import InfoPage from './components/InfoPage';
import { CartProvider } from './context/CartContext';
import './App.css'

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-white text-gray-900">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/products/:productId" element={<ProductPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/info" element={<InfoPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App
