import { createFileRoute } from '@tanstack/react-router'
import { Link } from "@tanstack/react-router";
export const Route = createFileRoute('/successPage')({
  component: SuccessPage,
})

function SuccessPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-green-100 p-10">
            <div className="bg-white shadow-md rounded-lg border border-green-300 text-center lg:py-20 lg:px-36 md:py-16 md:px-28 sm:py-14 sm:px-12">
                <h1 className="text-2xl font-bold text-green-600">Order Successful!</h1>
                <p className="mt-4 text-gray-700">Your order has been placed successfully.</p>
                <div className="mt-8">
                    <Link to="/">
                        <button className="w-full px-6 py-2 text-white rounded-lg font-semibold bg-green-400 hover:bg-green-500 transition duration-300 ease-in-out">
                        Go To Home
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default SuccessPage;
