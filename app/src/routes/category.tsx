import * as React from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'

// Example Categories
const categories = [
  {
    name: 'Electronics',
    description: 'Everything from mobile phones to computers and accessories.',
  },
  {
    name: 'Furniture',
    description: 'High-quality and stylish furniture for home and office.',
  },
  {
    name: 'Groceries',
    description: 'Fresh produce, snacks, beverages, and pantry essentials.',
  },
  // Add more categories as needed
]

export const Route = createFileRoute('/category')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-10 space-y-10">
      {categories.map((category, index) => (
        <div
          key={index}
          className="w-3/4 bg-white shadow-md rounded-lg border border-gray-300 p-6 flex"
        >
          {/* Category Details */}
          <div className="flex-grow">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-lg font-semibold text-gray-700">
                  Category Name:
                </p>
                <p className="text-lg text-gray-500">{category.name}</p>
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-700">
                  Description:
                </p>
                <p className="text-lg text-gray-500">{category.description}</p>
              </div>
            </div>
          </div>

          {/* Dividing Line */}
          <div className="mx-8 border-l border-gray-300"></div>

          {/* Order Button linking to Suppliers Route */}
          <div className="flex items-center justify-center w-1/4">
            <Link to="/suppliers">
              <button className="px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600">
                Order
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default RouteComponent
