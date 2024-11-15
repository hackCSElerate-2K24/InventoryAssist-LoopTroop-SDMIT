import React, { useState } from 'react';

function InventorySummary() {
    const [timeFrame, setTimeFrame] = useState("This Month");

    const itemsData = [
        { id: 1, name: "Rice (5kg)", values: { month: 1, week: 2, year: 3 } },
        { id: 2, name: "Cooking Oil (1L)", values: { month: 2, week: 1, year: 4 } },
        { id: 3, name: "Flour (2kg)", values: { month: 3, week: 3, year: 1 } },
        { id: 4, name: "Sugar (1kg)", values: { month: 4, week: 5, year: 2 } },
        { id: 5, name: "Salt (500g)", values: { month: 5, week: 6, year: 5 } },
        { id: 6, name: "Pulses (1kg)", values: { month: 6, week: 4, year: 6 } },
        { id: 7, name: "Tea (250g)", values: { month: 7, week: 7, year: 7 } },
        { id: 8, name: "Toothpaste", values: { month: 8, week: 9, year: 8 } },
        { id: 9, name: "Shampoo (200ml)", values: { month: 9, week: 8, year: 9 } },
    ];

    const sortedItems = itemsData
        .map(item => ({
            ...item,
            rank: timeFrame === "This Month" ? item.values.month 
                   : timeFrame === "This Week" ? item.values.week 
                   : item.values.year
        }))
        .sort((a, b) => a.rank - b.rank); // Sort items by rank

    return (
        <div className="">
            <div className="max-w-full mx-4 py-6 sm:mx-auto sm:px-6 lg:px-8">
                <div className="sm:flex sm:space-x-4">
                    <div className="w-full flex flex-col mt-8 space-y-4">
                        <div className="bg-white rounded-lg text-left overflow-hidden transition-all w-full p-5">
                            <div className="flex items-center justify-between">
                                <p className="text-3xl font-bold text-black">Top Selling Items</p>
                                <select 
                                    value={timeFrame}
                                    onChange={(e) => setTimeFrame(e.target.value)}
                                    className="border border-gray-500 rounded-lg p-2 text-gray-600"
                                >
                                    <option>This Month</option>
                                    <option>This Week</option>
                                    <option>This Year</option>
                                </select>
                            </div>
                        </div>

                        {/* 3x3 Grid for Top Selling Items */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {sortedItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="bg-white rounded-lg shadow-md p-4 border-black border-[1px] text-center hover:drop-shadow-xl"
                                >
                                    <p className="text-xl font-bold text-black">{item.name}</p>
                                    <p className="text-md text-gray-500">#{item.rank}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InventorySummary;
