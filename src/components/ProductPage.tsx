import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { getProductById } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductPage = () => {
  const { productId } = useParams();
  const product = getProductById(productId || '1');
  const [qty, setQty] = useState(1);
  const { addToCart } = useCart();

  if (!product) return <div className="p-8 text-center">Product not found.</div>;

  const handleAddToCart = () => {
    addToCart(product, qty);
    // You could add a success message or redirect here
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <Link to="/products" className="text-indigo-600 hover:underline mb-4 inline-block">← Back to Products</Link>
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="aspect-square">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-8 flex flex-col justify-center">
            <div>
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <div className="text-gray-500 mb-4">{product.category}</div>
              <div className="text-indigo-600 text-2xl font-semibold mb-6">₦{product.price.toLocaleString()}</div>
              <div className="text-gray-700 mb-8 leading-relaxed">{product.description}</div>
            </div>
            <div className="flex items-center gap-4 mb-6">
              <span className="font-semibold">Quantity:</span>
              <button onClick={() => setQty(q => Math.max(1, q - 1))} className="px-3 py-1 bg-gray-200 rounded-l hover:bg-gray-300">-</button>
              <span className="px-4">{qty}</span>
              <button onClick={() => setQty(q => q + 1)} className="px-3 py-1 bg-gray-200 rounded-r hover:bg-gray-300">+</button>
            </div>
            <button 
              onClick={handleAddToCart}
              className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold text-lg shadow hover:bg-indigo-700 transition"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage; 