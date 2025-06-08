'use client';

import { useState } from 'react';
import Link from 'next/link';
import { mockGroupBookings } from '@/lib/utils/mockData';

export default function NewCustomer() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    partyId: '',
    partyName: '',
  });
  
  const [showPartyModal, setShowPartyModal] = useState(false);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handlePartySelect = (groupId: string, groupName: string) => {
    setFormData({
      ...formData,
      partyId: groupId,
      partyName: groupName,
    });
    setShowPartyModal(false);
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">New Customer</h1>
        <Link href="/customers" className="text-gray-600 hover:text-gray-900">
          Cancel
        </Link>
      </div>
      
      <form className="bg-white p-6 rounded-lg shadow mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              required
            />
          </div>
          
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              required
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              required
            />
          </div>
        </div>
        
        <div className="mb-4">
          <label htmlFor="partyName" className="block text-sm font-medium text-gray-700 mb-1">
            Party Name (Optional)
          </label>
          <div className="relative">
            <input
              type="text"
              id="partyName"
              name="partyName"
              value={formData.partyName}
              readOnly
              onClick={() => setShowPartyModal(true)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 cursor-pointer bg-gray-50"
              placeholder="Click to select a wedding party"
            />
            {formData.partyName && (
              <button
                type="button"
                className="absolute right-2 top-2 text-gray-400 hover:text-gray-600"
                onClick={() => {
                  setFormData({
                    ...formData,
                    partyId: '',
                    partyName: '',
                  });
                }}
              >
                ✕
              </button>
            )}
          </div>
        </div>
        
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 bg-primary-500 text-white rounded-md hover:bg-primary-600"
          >
            Save Customer
          </button>
        </div>
      </form>
      
      {/* Party Selection Modal */}
      {showPartyModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Select Wedding Party</h3>
              <button
                type="button"
                className="text-gray-400 hover:text-gray-600"
                onClick={() => setShowPartyModal(false)}
              >
                ✕
              </button>
            </div>
            
            <div className="max-h-60 overflow-y-auto border border-gray-200 rounded-md">
              {mockGroupBookings.map(group => (
                <div
                  key={group.id}
                  className="p-3 hover:bg-gray-100 cursor-pointer border-b border-gray-200"
                  onClick={() => handlePartySelect(group.id, group.name)}
                >
                  <div className="font-medium">{group.name}</div>
                  <div className="text-sm text-gray-500">
                    Event: {new Date(group.eventDate).toLocaleDateString()}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 