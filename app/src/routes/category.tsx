import * as React from 'react';
import { createFileRoute, Link } from '@tanstack/react-router';

export const categories = [
  {
    name: 'Grains & Staples',
    items: ['Rice', 'Flour', 'Pulses'],
  },
  {
    name: 'Oils & Condiments',
    items: ['Cooking Oil', 'Salt', 'Sugar'],
  },
  {
    name: 'Beverages & Refreshments',
    items: ['Tea'],
  },
  {
    name: 'Personal Care',
    items: ['Toothpaste', 'Shampoo'],
  },
];

export const Route = createFileRoute('/category')({
  component: category,
});

function category() {
  return (
    <div className="mt-14 min-h-screen flex flex-col items-center justify-center bg-gray-100 p-10 space-y-10">
      {categories.map((category, index) => (
        <div
          key={index}
          id={`category-${index}`} // Unique ID for each category
          className="w-3/4 bg-white shadow-md rounded-lg border border-gray-300 p-6 flex flex-col space-y-4"
        >
          {/* Category Details */}
          <div className="flex-grow">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-lg font-semibold text-gray-700">Category Name:</p>
                <p className="text-lg text-gray-500">{category.name}</p>
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-700">Items Include:</p>
                <ul className="list-disc list-inside text-gray-500">
                  {category.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Order Button linking to Suppliers Route */}
          <div className="w-full">
            <Link
              to={`/suppliers?category=${encodeURIComponent(category.name)}&items=${encodeURIComponent(category.items.join(','))}`}
              id={`order-button-category-${index}`} // Unique ID for each category order button
            >
              <button className="w-full px-6 py-3 text-white rounded-lg font-semibold bg-[#3b3838]/[0.8] hover:bg-[#3b3838]">
                Order
              </button>
            </Link>
          </div>

        </div>
      ))}
    </div>
  );
}

export default category;
