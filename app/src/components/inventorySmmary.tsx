function InventorySummary() {
    return (
        <>
            <div className="max-w-full mx-4 my-24 py-6 sm:mx-auto sm:px-6 lg:px-8">
                <div className="sm:flex sm:space-x-4">
                    <div className="w-full flex flex-col mt-8 space-y-4">
                        <div className="bg-white rounded-lg text-left overflow-hidden transition-all w-full textRight">
                            <div className="bg-white p-5">
                                <p className="text-3xl font-bold text-black">Inventory Summary</p>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg text-left overflow-hidden transition-all w-full border-[1px] border-black textRight">
                            <div className="bg-white p-5 flex justify-between items-center">
                                <p className="text-3xl font-bold text-gray-400">Quantity in Hand</p>
                                <p className="text-3xl font-bold text-black">421</p>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg text-left overflow-hidden transition-all w-full border-[1px] border-black textRight">
                            <div className="bg-white p-5 flex justify-between items-center">
                                <p className="text-3xl font-bold text-gray-400">Quantity to be received from supplier</p>
                                <p className="text-3xl font-bold text-black">216</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InventorySummary
