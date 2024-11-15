import * as React from 'react';
import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/orderSupplier')({
  component: RouteComponent,
});

function RouteComponent() {
  // Get query parameters using URLSearchParams
  const category = new URLSearchParams(window.location.search).get('category');
  const items = new URLSearchParams(window.location.search).get('items')?.split(',');
  const supplier = new URLSearchParams(window.location.search).get('supplier');

  const [numOfUnits, setNumOfUnits] = React.useState(1);
  const unitPrice = 671; // Example fixed unit price (in Rupees)
  const stockPrice = numOfUnits * unitPrice;

  return (
    <div className="mt-14 min-h-screen flex flex-col items-center justify-center bg-gray-100 p-10 space-y-10">
      <div className="w-3/4 bg-white shadow-md rounded-lg border border-gray-300 p-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-lg font-semibold text-gray-700">Supplier:</p>
            <p className="text-lg text-gray-500">{supplier}</p>
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-700">Category:</p>
            <p className="text-lg text-gray-500">{category}</p>
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-700">Items Include:</p>
            <ul className="list-disc list-inside text-gray-500">
              {items?.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-700">Number of Units:</p>
            <input
              type="number"
              value={numOfUnits}
              onChange={(e) => setNumOfUnits(Number(e.target.value))}
              className="text-lg text-gray-500 border border-gray-300 rounded px-2"
            />
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-700">Unit Price (in ₹):</p>
            <p className="text-lg text-gray-500">{unitPrice}</p>
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-700">Stock Price:</p>
            <p className="text-lg text-gray-500">{stockPrice.toFixed(2)}</p>
          </div>
        </div>
        
        <div className="mt-6">
          {/* Use Link component to navigate to the SuccessPage */}
          <Link to={"/successPage"}>
            <button
              className="w-full px-6 py-3 text-white rounded-lg font-semibold bg-[#3b3838]/[0.8] hover:bg-[#3b3838] transition duration-300 ease-in-out"
            >
              Order
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RouteComponent;
