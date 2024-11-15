import * as React from 'react';
import { createFileRoute, Link } from '@tanstack/react-router';

const suppliers = [
  {
    agentName: "Rajesh Kumar",
    category: "Grains & Staples",
    phone: "+91 9876543210",
    address: "123 MG Road, Bengaluru, India",
  },
  {
    agentName: "Priya Sharma",
    category: "Oils & Condiments",
    phone: "+91 9876543211",
    address: "456 Park Street, Mumbai, India",
  },
  {
    agentName: "Amit Verma",
    category: "Beverages & Refreshments",
    phone: "+91 9876543212",
    address: "789 Nehru Avenue, Delhi, India",
  },
  {
    agentName: "Anita Joshi",
    category: "Personal Care",
    phone: "+91 9876543213",
    address: "321 Green Road, Chennai, India",
  },
];

export const Route = createFileRoute('/allSuppliers')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="mt-14 min-h-screen flex flex-col items-center justify-center bg-gray-100 p-10 space-y-10">
      <h2 className="text-2xl font-semibold text-gray-700">All Suppliers</h2>
      {suppliers.map((supplier, index) => (
        <div
          key={index}
          id={`supplier-${index}`} // Unique ID for each supplier
          className="w-3/4 bg-white shadow-md rounded-lg border border-gray-300 p-6 flex flex-col space-y-4"
        >
          <div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-lg font-semibold text-gray-700">Agent Name:</p>
                <p className="text-lg text-gray-500">{supplier.agentName}</p>
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-700">Category:</p>
                <p className="text-lg text-gray-500">{supplier.category}</p>
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-700">Phone No:</p>
                <p className="text-lg text-gray-500">{supplier.phone}</p>
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-700">Address:</p>
                <p className="text-lg text-gray-500">{supplier.address}</p>
              </div>
            </div>
          </div>

          {/* Order Button Below */}
          <div className="w-full">
            <Link
              to={`/orderSupplier?category=${encodeURIComponent(supplier.category)}&supplier=${encodeURIComponent(supplier.agentName)}`}
              id={`order-button-supplier-${index}`} // Unique ID for each supplier's order button
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

export default RouteComponent;
