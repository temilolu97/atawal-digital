import { useState } from 'react';
import ProductCard from './ProductCard';
import { products, getProductsByCategory } from '../data/products';

const ProductsPage = () => {
  const [selected, setSelected] = useState('All');
  const categories = ['Women\'s Fashion', 'Men\'s Fashion', 'Footwear', 'Accessories'];

  const getProductsForCategory = (category: string) => {
    return getProductsByCategory(category);
  };

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Featured Fashion (Prices from ₦50,000)</h1>
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        <button
          className={`px-4 py-2 rounded-full border ${selected === 'All' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700'} font-semibold shadow-sm transition`}
          onClick={() => setSelected('All')}
        >
          All
        </button>
        {categories.map(cat => (
          <button
            key={cat}
            className={`px-4 py-2 rounded-full border ${selected === cat ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700'} font-semibold shadow-sm transition`}
            onClick={() => setSelected(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      {categories.map(cat => (
        (selected === 'All' || selected === cat) && (
          <div key={cat} className="mb-12">
            <h2 className="text-xl font-bold mb-4 text-gray-800">{cat}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {getProductsForCategory(cat).map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )
      ))}
    </div>
  );
};

export default ProductsPage; 