import React, { useEffect, useState } from "react";

function StockUpdateCard() {
    const [stock, setStock] = useState({
        inStock: 800,
        outOfStock: 100,
        lowStock: 100,
    });

    const totalStock = 1000;

    const updateStockValues = () => {
        // Generate random values ensuring constraints
        const outOfStock = Math.floor(Math.random() * (totalStock / 4)); // Random value for out-of-stock (0-250)
        const lowStock = Math.floor(Math.random() * (totalStock / 4)); // Random value for low-stock (0-250)
        let inStock = totalStock - (outOfStock + lowStock);

        // Ensure inStock is greater than the sum of outOfStock and lowStock
        if (inStock <= (outOfStock + lowStock)) {
            inStock = totalStock - (outOfStock + lowStock); // Adjust to meet the condition
        }

        setStock({ inStock, outOfStock, lowStock });
    };

    useEffect(() => {
        // Update stock values every 15 seconds
        const interval = setInterval(updateStockValues, 15000);
        updateStockValues(); // Initial update
        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <div className="px-16">
            <div className="text-left overflow-hidden transition-all w-full mt-8 ml-4">
                <div className="bg-white p-5 pb-0">
                    <p className="text-3xl font-bold text-black">Key Updates</p>
                </div>
            </div>
            <div className="max-w-full mx-4 sm:mx-auto sm:px-6 lg:px-8">
                <div className="sm:flex sm:space-x-4">
                    <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden transform transition-all mb-4 w-full sm:w-1/3 sm:my-8 border-[1px] border-black hover:drop-shadow-xl">
                        <div className="bg-white p-5">
                            <div className="sm:flex sm:items-start">
                                <div className="text-center sm:mt-0 sm:ml-2 sm:text-left">
                                    <h3 className="text-sm leading-6 font-medium text-gray-400">in-stock</h3>
                                    <p className="text-3xl font-bold text-black">{stock.inStock}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden transform transition-all mb-4 w-full sm:w-1/3 sm:my-8 border-[1px] border-black hover:drop-shadow-xl">
                        <div className="bg-white p-5">
                            <div className="sm:flex sm:items-start">
                                <div className="text-center sm:mt-0 sm:ml-2 sm:text-left">
                                    <h3 className="text-sm leading-6 font-medium text-gray-400">out of stock</h3>
                                    <p className="text-3xl font-bold text-black">{stock.outOfStock}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden transform transition-all mb-4 w-full sm:w-1/3 sm:my-8 border-[1px] border-black hover:drop-shadow-xl">
                        <div className="bg-white p-5">
                            <div className="sm:flex sm:items-start">
                                <div className="text-center sm:mt-0 sm:ml-2 sm:text-left">
                                    <h3 className="text-sm leading-6 font-medium text-gray-400">low stock</h3>
                                    <p className="text-3xl font-bold text-black">{stock.lowStock}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StockUpdateCard;
