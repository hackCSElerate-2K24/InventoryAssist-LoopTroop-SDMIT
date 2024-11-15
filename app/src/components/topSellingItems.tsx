function InventorySummary() {
    const topSellingItems = [
        { id: 1, name: "Rice (5kg)", value: "#1" },
        { id: 2, name: "Cooking Oil (1L)", value: "#2" },
        { id: 3, name: "Flour (2kg)", value: "#3" },
        { id: 4, name: "Sugar (1kg)", value: "#4" },
        { id: 5, name: "Salt (500g)", value: "#5" },
        { id: 6, name: "Pulses (1kg)", value: "#6" },
        { id: 7, name: "Tea (250g)", value: "#7" },
        { id: 8, name: "Toothpaste", value: "#8" },
        { id: 9, name: "Shampoo (200ml)", value: "#9" },
    ];

    return (
        <div className="max-w-full mx-4 py-6 sm:mx-auto sm:px-6 lg:px-8">
            <div className="sm:flex sm:space-x-4">
                <div className="w-full flex flex-col mt-8 space-y-4">
                    <div className="bg-white rounded-lg text-left overflow-hidden transition-all w-full textRight">
                        <div className="bg-white p-5">
                            <p className="text-3xl font-bold text-black">Top Selling Items</p>
                        </div>
                    </div>

                    {/* 3x3 Grid for Top Selling Items */}
                    <div className="grid grid-cols-3 gap-4">
                        {topSellingItems.map((item) => (
                            <div
                                key={item.id}
                                className="bg-white rounded-lg shadow-md p-4  border-black border-[1px] text-center"
                            >
                                <p className="text-xl font-bold text-black">{item.name}</p>
                                <p className="text-md text-gray-500">{item.value}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InventorySummary;
