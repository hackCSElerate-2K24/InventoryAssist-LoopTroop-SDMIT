import * as React from 'react';
import { createFileRoute, useNavigate } from '@tanstack/react-router';
import BarcodeScanner from '@/components/BarcodeScanner';
import useAuthStore from '@/store/authStore';

export const Route = createFileRoute('/profile')({
  component: RouteComponent,
});

function RouteComponent({ photo, merchantId, userId, name, email, phone }) {
  const { userInfo } = useAuthStore()
  const navigate = useNavigate()
  React.useEffect(() => {
    if (!userInfo) {
      navigate({ to: '/login' })
    }
  }, [])
  React.useEffect(() => {
    if (!userInfo) {
      navigate({ to: '/login' })
    }
  }, [userInfo])

  return (
    <div className="min-h-screen flex items-center justify-center py-4 px-6 sm:px-10">
      <div className="w-full max-w-4xl p-6 sm:p-8 bg-white shadow-md rounded-lg border border-black flex flex-col sm:flex-row justify-center">
        {/* Container for Profile Image and Details */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start mb-6 sm:mb-0">
          {/* Profile Photo */}
          <div className="flex-shrink-0 sm:mr-8 mb-6 sm:mb-0">
            <img
              src={photo || "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1731610028~exp=1731613628~hmac=169a508c23ac51a91acc89eb1f22bfffa95dc74590e407964e423858b97b6389&w=1060"}
              alt="Profile"
              className="w-32 h-32 sm:w-48 sm:h-48 rounded-lg object-cover"
            />
          </div>

          {/* Merchant ID below the Profile Photo */}
          <div className="text-center sm:text-left">
            <p className="text-lg font-semibold text-gray-700">Merchant ID:</p>
            <p className="text-lg text-gray-500">{merchantId || "123456"}</p>
          </div>
        </div>

        {/* Dividing Line */}
        <div className="mx-0 sm:mx-8 border-t sm:border-t-0 sm:border-l border-gray-500 h-px sm:h-full w-full sm:w-px sm:border-l sm:border-t-0"></div>

        {/* Other Details on the Right */}
        <div className="space-y-4 mt-4 sm:mt-0 sm:ml-8 sm:w-1/2 w-full">
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
  )
}

export default RouteComponent
