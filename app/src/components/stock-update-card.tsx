import axios from "axios";
import { useEffect, useState } from "react";

function StockUpdateCard() {
        const [stockStatus, setStockStatus] = useState({
        inStock: 0,
        outOfStock: 0,
        lowStock: 0,
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchStockStatus = async () => {
            try {
                const response = await axios.get('api/product/stock-status'); // Replace with your backend URL
                setStockStatus(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching stock status:', error);
                setError('Unable to fetch stock status');
                setLoading(false);
            }
        };

        fetchStockStatus();
    }, []);
    return (
        <>
        <div className="">
            <div className="text-left overflow-hidden transition-all w-full sm:px-8 px-6">
                <div className="bg-white  pb-0 my-4">
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
                                    <p className="text-3xl font-bold text-black">{stockStatus.inStock}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden transform transition-all mb-4 w-full sm:w-1/3 sm:my-8 border-[1px] border-black hover:drop-shadow-xl">
                        <div className="bg-white p-5">
                            <div className="sm:flex sm:items-start">
                                <div className="text-center sm:mt-0 sm:ml-2 sm:text-left">
                                    <h3 className="text-sm leading-6 font-medium text-gray-400">out of stock</h3>
                                    <p className="text-3xl font-bold text-black">{stockStatus.outOfStock}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden transform transition-all mb-4 w-full sm:w-1/3 sm:my-8 border-[1px] border-black hover:drop-shadow-xl">
                        <div className="bg-white p-5">
                            <div className="sm:flex sm:items-start">
                                <div className="text-center sm:mt-0 sm:ml-2 sm:text-left">
                                    <h3 className="text-sm leading-6 font-medium text-gray-400">low stock</h3>
                                    <p className="text-3xl font-bold text-black">{stockStatus.lowStock}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default StockUpdateCard