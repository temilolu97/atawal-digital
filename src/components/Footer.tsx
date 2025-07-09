import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-gray-50 border-t mt-8 py-10 text-center text-sm text-gray-500">
    <div className="container mx-auto px-4 flex flex-col md:flex-row md:justify-between gap-8">
      <div className="flex-1 text-left space-y-2">
        <div className="font-semibold text-gray-700 mb-1">Information</div>
        <ul className="space-y-1">
          <li><Link to="/info" className="hover:text-indigo-600 underline">Privacy Policy</Link></li>
          <li><Link to="/info" className="hover:text-indigo-600 underline">Terms & Conditions</Link></li>
          <li><Link to="/info" className="hover:text-indigo-600 underline">Payment Options</Link></li>
          <li><Link to="/info" className="hover:text-indigo-600 underline">Exchange Policy</Link></li>
        </ul>
      </div>
      <div className="flex-1 text-left space-y-2">
        <div className="font-semibold text-gray-700 mb-1">Delivery & Exchange</div>
        <div>Free delivery in Lagos on orders over ₦200,000</div>
        <div>Nationwide delivery available</div>
        <div>Exchange allowed within 5 days on non-faulty items</div>
      </div>
      <div className="flex-1 text-left space-y-2">
        <div className="font-semibold text-gray-700 mb-1">Contact</div>
        <div>Phone: <a href="tel:09068953350" className="hover:text-indigo-600 underline">09068953350</a></div>
        <div>Email: <a href="mailto:info@atawaldigital.com" className="hover:text-indigo-600 underline">info@atawaldigital.com</a></div>
        <div>8, Rasheed Alaba Williams Street, Lekki, Lagos State, Nigeria</div>
      </div>
    </div>
    <div className="mt-8 text-center text-xs text-gray-400">
      <a href="https://www.atawalfashion.com" className="underline hover:text-indigo-600">www.atawalfashion.com</a> &nbsp;|&nbsp; © 2025 www.atawalfashion.com — Powered by ATAWAL DIGITAL
    </div>
  </footer>
);

export default Footer; 