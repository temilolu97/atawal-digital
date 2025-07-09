import { useCart } from '../context/CartContext';

const CartPage = () => {
  const { cart, updateQuantity, removeFromCart, getCartTotal } = useCart();

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Your Cart</h1>
      {cart.length === 0 ? (
        <div className="text-center text-gray-500">
          <p className="text-lg mb-4">Your cart is empty.</p>
          <a href="/products" className="text-indigo-600 hover:underline">Continue Shopping →</a>
        </div>
      ) : (
        <div className="space-y-6">
          {cart.map(item => (
            <div key={item.id} className="flex items-center justify-between bg-white rounded-lg shadow p-4">
              <div className="flex items-center gap-4">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <div className="font-medium text-gray-900">{item.name}</div>
                  <div className="text-indigo-600 font-semibold">₦{item.price.toLocaleString()}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => updateQuantity(item.id, item.quantity - 1)} 
                  className="px-2 py-1 bg-gray-200 rounded-l hover:bg-gray-300"
                >
                  -
                </button>
                <span className="px-3">{item.quantity}</span>
                <button 
                  onClick={() => updateQuantity(item.id, item.quantity + 1)} 
                  className="px-2 py-1 bg-gray-200 rounded-r hover:bg-gray-300"
                >
                  +
                </button>
              </div>
              <div className="w-24 text-right font-semibold">₦{(item.price * item.quantity).toLocaleString()}</div>
              <button 
                onClick={() => removeFromCart(item.id)} 
                className="ml-4 text-red-500 hover:underline"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="flex justify-between items-center border-t pt-6 mt-6">
            <div className="text-lg font-bold">Total</div>
            <div className="text-xl font-bold text-indigo-700">₦{getCartTotal().toLocaleString()}</div>
          </div>
          <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold text-lg shadow hover:bg-indigo-700 transition mt-4">Checkout</button>
        </div>
      )}
    </div>
  );
};

export default CartPage; 