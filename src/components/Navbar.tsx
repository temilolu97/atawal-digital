import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import atawalLogo from '../assets/atawal-logo.png'

const Navbar = () => {
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-0">
        <Link to="/">
          <img src={atawalLogo} className='h-10'/>
        </Link>
        <div className="flex items-center gap-6">
          <Link to="/" className="hover:text-indigo-600 transition">Home</Link>
          <Link to="/products" className="hover:text-indigo-600 transition">Products</Link>
          <Link to="/cart" className="relative hover:text-indigo-600 transition">
            <span>Cart</span>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-indigo-600 text-white text-xs rounded-full px-2 py-0.5 font-semibold">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 