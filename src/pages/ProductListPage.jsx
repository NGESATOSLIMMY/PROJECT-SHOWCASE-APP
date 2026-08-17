import React from 'react';

export default function ProductListPage() {
  const products = [
    { id: 1, amount: '800 Robux', price: '$7.99' },
    { id: 2, amount: '2,000 Robux', price: '$24.99' },
    { id: 3, amount: '4,500 Robux', price: '$49.99' },
    { id: 4, amount: '10,000 Robux', price: '$99.99' },
  ];

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">Available Robux Packages</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((item) => (
          <div key={item.id} className="border border-gray-700 p-4 rounded text-center bg-gray-800">
            <h2 className="text-xl font-bold">{item.amount}</h2>
            <p className="text-lg my-2 text-indigo-400 font-semibold">{item.price}</p>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded w-full mt-2">
              BUY NOW!
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}