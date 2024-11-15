// import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import React, { useState } from 'react';
import SuccessPage from '@/components/successPage';

export const Route = createFileRoute('/orderSupplier')({
  component: OrderSupplier,
})

function OrderSupplier() {
  const [numOfUnits, setNumOfUnits] = useState(1);
  const [unitPrice, setUnitPrice] = useState(1);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const stockPrice = numOfUnits * unitPrice;

  const handleOrder = () => {
    setIsOrderPlaced(true);
  };

  if (isOrderPlaced) {
    return <SuccessPage />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-10">
      <div className="w-3/4 bg-white shadow-md rounded-lg border border-gray-300 p-6 flex">
        
        {/* Order Details */}
        <div className="flex-grow">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-lg font-semibold text-gray-700">Item Name:</p>
              <p className="text-lg text-gray-500">Sample Item</p>
            </div>
            <div>
              <p className="text-lg font-semibold text-gray-700">Category:</p>
              <p className="text-lg text-gray-500">Sample Category</p>
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
              <p className="text-lg font-semibold text-gray-700">Unit Price:</p>
              <input
                type="number"
                value={unitPrice}
                onChange={(e) => setUnitPrice(Number(e.target.value))}
                className="text-lg text-gray-500 border border-gray-300 rounded px-2"
              />
            </div>
            <div>
              <p className="text-lg font-semibold text-gray-700">Stock Price:</p>
              <p className="text-lg text-gray-500">{stockPrice.toFixed(2)}</p>
            </div>
          </div>
        </div>
        
        {/* Dividing Line */}
        <div className="mx-8 border-l border-gray-300"></div>
        
        {/* Order Button */}
        <div className="flex items-center justify-center w-1/4">
          <button 
            onClick={handleOrder} 
            className="px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600"
          >
            Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderSupplier
