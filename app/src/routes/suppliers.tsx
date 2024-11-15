import * as React from 'react';
import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/suppliers')({
  component: RouteComponent,
});

// Array of supplier data
const suppliers = [
  {
    agentName: "John Smith",
    category: "Electronics",
    phone: "+1234567891",
    address: "123 Elm Street, Metropolis, USA",
  },
  {
    agentName: "Emily Johnson",
    category: "Furniture",
    phone: "+1234567892",
    address: "456 Oak Avenue, Gotham, USA",
  },
  {
    agentName: "Michael Brown",
    category: "Groceries",
    phone: "+1234567893",
    address: "789 Pine Road, Star City, USA",
  },
  // Add more suppliers as needed
];

function RouteComponent() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-10 space-y-10">
      {suppliers.map((supplier, index) => (
        <div key={index} className="w-3/4 bg-white shadow-md rounded-lg border border-gray-300 p-6 flex">
          
          {/* Supplier Details */}
          <div className="flex-grow">
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
          
          {/* Dividing Line */}
          <div className="mx-8 border-l border-gray-300"></div>
          
          {/* Order Button linking to OrderSupplierRoute */}
          <div className="flex items-center justify-center w-1/4">
            <Link to="/orderSupplier">
              <button className="px-6 py-3 text-white rounded-lg font-semibold  bg-[#3b3838]/[0.8] hover:bg-[#3b3838]">
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
