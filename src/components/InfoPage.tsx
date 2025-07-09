const InfoPage = () => (
  <div className="max-w-3xl mx-auto py-12 px-4 space-y-10">
    <h1 className="text-3xl font-bold mb-6 text-center">Information & Policies</h1>
    <section>
      <h2 className="text-xl font-semibold mb-2">Privacy Policy</h2>
      <p className="text-gray-700">We value your privacy. Your personal details remain secure and will never be shared without consent.</p>
    </section>
    <section>
      <h2 className="text-xl font-semibold mb-2">Terms & Conditions</h2>
      <p className="text-gray-700">All purchases are subject to our policies on payment, delivery, exchange, and product care.</p>
    </section>
    <section>
      <h2 className="text-xl font-semibold mb-2">Payment Options</h2>
      <ul className="list-disc ml-6 text-gray-700">
        <li>We accept secure card payments</li>
        <li>Bank transfers</li>
        <li>Pay-on-delivery (Lagos only)</li>
      </ul>
    </section>
    <section>
      <h2 className="text-xl font-semibold mb-2">Exchange Policy</h2>
      <p className="text-gray-700">Items can be exchanged within 5 days of delivery if unused and in original packaging. T&Cs apply.</p>
    </section>
    <section>
      <h2 className="text-xl font-semibold mb-2">Delivery & Exchange</h2>
      <ul className="list-disc ml-6 text-gray-700">
        <li>Free delivery in Lagos on orders over ₦200,000</li>
        <li>Nationwide delivery available</li>
        <li>Exchange allowed within 5 days on non-faulty items</li>
      </ul>
    </section>
    <section>
      <h2 className="text-xl font-semibold mb-2">Contact</h2>
      <ul className="text-gray-700">
        <li>Phone: 09068953350</li>
        <li>Email: info@atawaldigital.com</li>
        <li>Address: 8, Rasheed Alaba Williams Street, Lekki, Lagos State, Nigeria</li>
        <li>Website: <a href="https://www.atawalfashion.com" className="underline hover:text-indigo-600">www.atawalfashion.com</a></li>
      </ul>
    </section>
  </div>
);

export default InfoPage; 