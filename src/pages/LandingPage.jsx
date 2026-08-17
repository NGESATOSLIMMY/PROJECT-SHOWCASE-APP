import React from 'react';

export default function LandingPage() {
  return (
    <div className="p-8 text-center max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Welcome to BloxStore</h1>
      <p className="text-gray-300 mb-6">Buy instant Robux safely and quickly.</p>
      
      <button className="bg-indigo-600 text-white px-6 py-2 rounded mb-12">
        See Offers
      </button>

      <div className="grid md:grid-cols-3 gap-4 text-left">
        <div className="border border-gray-700 p-4 rounded">
          <h3 className="font-bold mb-1"> Fast Delivery</h3>
          <p className="text-sm text-gray-400">Instant processing on all orders.</p>
        </div>
        <div className="border border-gray-700 p-4 rounded">
          <h3 className="font-bold mb-1"> Safe & Secure</h3>
          <p className="text-sm text-gray-400">No passwords needed.</p>
        </div>
        <div className="border border-gray-700 p-4 rounded">
          <h3 className="font-bold mb-1">💎 Best Prices</h3>
          <p className="text-sm text-gray-400">Get more Robux for less.</p>
        </div>
      </div>
    </div>
  );
}