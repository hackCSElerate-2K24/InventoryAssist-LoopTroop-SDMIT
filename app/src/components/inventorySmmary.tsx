import React, { useEffect, useState } from "react";

function InventorySummary() {
    const [inventory, setInventory] = useState({
        quantityInHand: 421,
        quantityToBeReceived: 216,
    });

    const totalQuantity = 1000;

    const updateInventoryValues = () => {
        // Generate random values for Quantity in Hand and Quantity to be Received
        const quantityToBeReceived = Math.floor(Math.random() * (totalQuantity / 2)); // Random number between 0 and totalQuantity/2
        const quantityInHand = totalQuantity - quantityToBeReceived; // Ensure the sum is always 1000
        setInventory({ quantityInHand, quantityToBeReceived });
    };

    useEffect(() => {
        // Simulate daily update (using 24 hours in milliseconds for real implementation, here shortened for testing)
        const interval = setInterval(updateInventoryValues, 86400000); // 24 hours = 86400000ms
        updateInventoryValues(); // Run once immediately
        return () => clearInterval(interval); // Cleanup on component unmount
    }, []);

    return (
        <div className="pr-16">
            <div className="max-w-full my-8 py-6 sm:mx-auto sm:px-6 lg:px-8 pl-0 lg:pl-4 sm:my-0 sm:py-0">
                <div className="sm:flex sm:space-x-4">
                    <div className="w-full flex flex-col lg:mt-8 space-y-4">
                        <div className="bg-white rounded-lg text-left overflow-hidden transition-all w-full textRight">
                            <div className="bg-white lg:mt-14 sm:mt-0">
                                <p className="text-3xl font-bold text-black">Inventory Summary</p>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg text-left overflow-hidden transition-all w-full border-[1px] border-black hover:drop-shadow-xl">
                            <div className="bg-white p-5 flex justify-between items-center">
                                <p className="text-3xl font-bold text-gray-400">Quantity in Hand</p>
                                <p className="text-3xl font-bold text-black">{inventory.quantityInHand}</p>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg text-left overflow-hidden transition-all w-full border-[1px] border-black hover:drop-shadow-xl">
                            <div className="bg-white p-5 flex justify-between items-center">
                                <p className="text-3xl font-bold text-gray-400">Quantity to be received from supplier</p>
                                <p className="text-3xl font-bold text-black">{inventory.quantityToBeReceived}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InventorySummary;
