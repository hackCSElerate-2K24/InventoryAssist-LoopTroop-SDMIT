import React from 'react';
import { Link } from "@tanstack/react-router"

function SuccessPage() {
return (
    <div className="min-h-screen flex items-center justify-center bg-green-100 p-10">
        <div className="bg-white shadow-md rounded-lg border border-green-300 p-6 text-center">
        <h1 className="text-2xl font-bold text-green-600">Order Successful!</h1>
        <p className="mt-4 text-gray-700">Your order has been placed successfully.</p>
        <div className="mt-4">
            <Link to="/">
                <button className="w-full px-6 py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600">
                    Go To Home
                </button>
            </Link>
        </div>
    </div>
        
    </div>
);
}

export default SuccessPage;
