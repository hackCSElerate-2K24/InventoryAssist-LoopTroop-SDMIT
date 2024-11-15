import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import BarcodeScanner from '@/components/BarcodeScanner'

export const Route = createFileRoute('/setting')({
  component: RouteComponent,
})

function RouteComponent({ photo, merchantId, userId, name, email, phone }) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-1/2 p-16 bg-white shadow-md rounded-lg border border-black flex justify-center">
        {/* Container for Profile Image and Details */}
        <div className="flex items-center flex-wrap sm:flex-nowrap">
          {/* Profile Photo */}
          <div className="flex-col pr-16">
            <div className="flex-shrink-0 mb-6">
              <img
                src={photo || "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1731610028~exp=1731613628~hmac=169a508c23ac51a91acc89eb1f22bfffa95dc74590e407964e423858b97b6389&w=1060"}
                alt="Profile"
                className="w-72 h-w-72 rounded-lg"
              />
            </div>

            {/* Merchant ID below the Profile Photo */}
            <div className="sm:mt-0 w-full sm:w-auto text-center">
              <p className="text-lg font-semibold text-gray-700">Merchant ID:</p>
              <p className="text-lg text-gray-500">{merchantId || "123456"}</p>
            </div>
          </div>

          {/* Dividing Line */}
          <div className="mx-8 border-l border-gray-500 h-32 sm:h-full"></div>

          {/* Other Details on the Right */}
          <div className="space-y-4 mt-4 sm:mt-0 w-full sm:w-auto ml-16">
            <div>
              <p className="text-lg font-semibold text-gray-700">ID:</p>
              <p className="text-lg text-gray-500">{userId || "7890"}</p>
            </div>
            <div>
              <p className="text-lg font-semibold text-gray-700">Name:</p>
              <p className="text-lg text-gray-500">{name || "John Doe"}</p>
            </div>
            <div>
              <p className="text-lg font-semibold text-gray-700">Email:</p>
              <p className="text-lg text-gray-500">{email || "john.doe@example.com"}</p>
            </div>
            <div>
              <p className="text-lg font-semibold text-gray-700">Phone Number:</p>
              <p className="text-lg text-gray-500">{phone || "+1234567890"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RouteComponent;
