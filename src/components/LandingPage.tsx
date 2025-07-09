import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import { getProductsByCategory } from '../data/products';
import atawalLogo from '../assets/atawal-logo.png'

const LandingPage = () => {
  const featured = {
    "Women's Fashion": getProductsByCategory("Women's Fashion").slice(0, 3),
    "Men's Fashion": getProductsByCategory("Men's Fashion").slice(0, 3),
    "Footwear": getProductsByCategory("Footwear").slice(0, 3),
    "Accessories": getProductsByCategory("Accessories").slice(0, 3),
  };

  return (
    <div>
      <section className="py-16 bg-gradient-to-br from-indigo-50 to-white text-center">
        <div className=' flex justify-center'>
            <img src={atawalLogo} className='h-20'/>
        </div>
        <p className="text-lg md:text-xl text-gray-700 mb-6 max-w-2xl mx-auto">Discover fashion that speaks elegance, confidence, and class. From contemporary designs to timeless African luxury, we bring premium fashion to your wardrobe. Handcrafted, curated, and delivered with flair.</p>
        <p className="text-base text-gray-500 mb-8">Style made simple. Confidence made timeless.</p>
        <Link to="/products" className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-indigo-700 transition">Explore Collection →</Link>
      </section>
      <section className="py-12 max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center">Featured Categories</h2>
        <div className="space-y-12">
          {Object.entries(featured).map(([category, products]) => (
            <div key={category} className="bg-white rounded-xl shadow p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-800">{category}</h3>
                <Link to="/products" className="text-indigo-600 hover:underline text-sm font-medium">See More →</Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {products.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="py-12 max-w-3xl mx-auto text-center px-4">
        <h2 className="text-xl font-bold mb-2">Who We Are</h2>
        <p className="text-gray-700 mb-4">ATAWAL Digital is a forward-thinking fashion and merchandise brand redefining the look and feel of premium wear in Nigeria. We specialize in unique, high-quality pieces tailored for modern individuals who appreciate detail, style, and value.</p>
        <p className="text-gray-500">We're more than a fashion store — we're your personal gateway to excellence in clothing, footwear, and accessories, backed by tech-driven customer service and seamless delivery.</p>
      </section>
    </div>
  );
};

export default LandingPage; 