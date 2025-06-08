'use client';

import { useState } from 'react';
import Link from 'next/link';
import { mockCustomers } from '@/lib/utils/mockData';

export default function NewGroupBooking() {
  const [formData, setFormData] = useState({
    groupName: '',
    eventDate: '',
    expectedSize: 5,
    primaryCustomerId: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Create Group Booking</h1>
        <Link href="/bookings" className="text-gray-600 hover:text-gray-900">
          Cancel
        </Link>
      </div>

      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <div className="mb-4">
          <label htmlFor="groupName" className="block text-sm font-medium text-gray-700 mb-1">
            Group/Wedding Name
          </label>
          <input
            type="text"
            id="groupName"
            name="groupName"
            value={formData.groupName}
            onChange={handleInputChange}
            placeholder="e.g. Smith Wedding Party"
            className="w-full border border-gray-300 rounded-md px-3 py-2"
          />
        </div>
            
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700 mb-1">
              Event Date
            </label>
            <input
              type="date"
              id="eventDate"
              name="eventDate"
              value={formData.eventDate}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>
              
          <div>
            <label htmlFor="expectedSize" className="block text-sm font-medium text-gray-700 mb-1">
              Expected Group Size
            </label>
            <input
              type="number"
              id="expectedSize"
              name="expectedSize"
              value={formData.expectedSize}
              onChange={handleInputChange}
              min="1"
              max="20"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="primaryCustomerId" className="block text-sm font-medium text-gray-700 mb-1">
            Primary Customer (Groom)
          </label>
          <select
            id="primaryCustomerId"
            name="primaryCustomerId"
            value={formData.primaryCustomerId}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2"
          >
            <option value="">Select customer...</option>
            {mockCustomers.map(customer => (
              <option key={customer.id} value={customer.id}>
                {customer.firstName} {customer.lastName} ({customer.email})
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex justify-between">
        <Link 
          href="/bookings"
          className="px-4 py-2 rounded-md bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
        >
          Cancel
        </Link>
        
        <button
          type="button"
          className="px-4 py-2 rounded-md bg-primary-500 text-white hover:bg-primary-600"
        >
          Create Group Booking
        </button>
      </div>
    </div>
  );
} 