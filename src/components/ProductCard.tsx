import { Link } from 'react-router-dom';
import { type Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  minimal?: boolean;
}

const ProductCard = ({ product, minimal }: ProductCardProps) => {
  if (minimal) {
    return (
      <div className="flex items-center justify-between py-2 bg-white"> 
        <div>
          <div className="font-medium text-gray-900">{product.name}</div>
          <div className="text-indigo-600 font-semibold">₦{product.price.toLocaleString()}</div>
        </div>
        <Link to={`/products/${product.id}`} className="ml-4 px-3 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700 text-sm font-semibold">View</Link>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <div className="aspect-square overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="font-medium text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
        <div className="text-indigo-600 font-semibold mb-3">₦{product.price.toLocaleString()}</div>
        <Link 
          to={`/products/${product.id}`} 
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded text-center text-sm font-semibold hover:bg-indigo-700 transition block"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard; 