'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { mockGroupBookings, mockInventoryItems } from '@/lib/utils/mockData';

export default function AddGroupMember() {
  const router = useRouter();
  const params = useParams();
  const groupId = params.id as string;
  
  // Find the current group from mock data
  const group = mockGroupBookings.find(g => g.id === groupId);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    // Measurements
    height: '',
    chest: '',
    waist: '',
    neck: '',
    sleeve: '',
    inseam: '',
    shoeSize: '',
    notes: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would save to the database
    // Here we just simulate a successful save
    
    router.push(`/bookings/group/${groupId}`);
  };

  if (!group) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <h2 className="text-xl font-medium text-red-600 mb-2">Group Not Found</h2>
          <p className="mb-4">The group booking you are looking for does not exist.</p>
          <Link href="/bookings" className="text-primary-600 hover:underline">
            Return to Bookings
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Add Group Member</h1>
          <p className="text-gray-600">
            Adding to: <span className="font-medium">{group.name}</span>
          </p>
        </div>
        <Link href={`/bookings/group/${groupId}`} className="text-gray-600 hover:text-gray-900">
          Cancel
        </Link>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Customer Information */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-lg font-semibold mb-4">Customer Information</h2>
          
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
        </div>
        
        {/* Measurements */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Measurements</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label htmlFor="height" className="block text-sm font-medium text-gray-700 mb-1">
                Height (cm)
              </label>
              <input
                type="number"
                id="height"
                name="height"
                value={formData.height}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>
            
            <div>
              <label htmlFor="chest" className="block text-sm font-medium text-gray-700 mb-1">
                Chest (cm)
              </label>
              <input
                type="number"
                id="chest"
                name="chest"
                value={formData.chest}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>
            
            <div>
              <label htmlFor="waist" className="block text-sm font-medium text-gray-700 mb-1">
                Waist (cm)
              </label>
              <input
                type="number"
                id="waist"
                name="waist"
                value={formData.waist}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label htmlFor="neck" className="block text-sm font-medium text-gray-700 mb-1">
                Neck (cm)
              </label>
              <input
                type="number"
                id="neck"
                name="neck"
                value={formData.neck}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>
            
            <div>
              <label htmlFor="sleeve" className="block text-sm font-medium text-gray-700 mb-1">
                Sleeve (cm)
              </label>
              <input
                type="number"
                id="sleeve"
                name="sleeve"
                value={formData.sleeve}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>
            
            <div>
              <label htmlFor="inseam" className="block text-sm font-medium text-gray-700 mb-1">
                Inseam (cm)
              </label>
              <input
                type="number"
                id="inseam"
                name="inseam"
                value={formData.inseam}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label htmlFor="shoeSize" className="block text-sm font-medium text-gray-700 mb-1">
                Shoe Size
              </label>
              <input
                type="number"
                id="shoeSize"
                name="shoeSize"
                value={formData.shoeSize}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
              Measurement Notes
            </label>
            <textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              rows={3}
              placeholder="Any special fitting instructions or notes about measurements"
            />
          </div>
        </div>
        
        {/* Outfit Selection */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-lg font-semibold mb-4">Outfit Selection</h2>
          <p className="text-sm text-gray-500 mb-4">
            This member will be assigned the standard outfit items for this group. You can adjust quantities or make changes below.
          </p>
          
          <div className="bg-gray-50 p-4 rounded-md">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider py-2">Item</th>
                  <th className="text-center text-xs font-medium text-gray-500 uppercase tracking-wider py-2">Size</th>
                  <th className="text-center text-xs font-medium text-gray-500 uppercase tracking-wider py-2">Quantity</th>
                </tr>
              </thead>
              <tbody>
                {mockInventoryItems.slice(0, 2).map((item) => (
                  <tr key={item.id} className="border-t border-gray-200">
                    <td className="py-3">
                      <div className="font-medium">{item.name}</div>
                      <div className="text-sm text-gray-500">{item.color}</div>
                    </td>
                    <td className="text-center py-3">
                      <select className="border border-gray-300 rounded-md px-2 py-1">
                        <option value="XS">XS</option>
                        <option value="S">S</option>
                        <option value="M" selected>M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL</option>
                      </select>
                    </td>
                    <td className="text-center py-3">
                      <input
                        type="number"
                        min="0"
                        max="5"
                        defaultValue="1"
                        className="border border-gray-300 rounded-md px-2 py-1 w-16 text-center"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="flex justify-between">
          <Link
            href={`/bookings/group/${groupId}`}
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </Link>
          
          <button
            type="submit"
            className="px-4 py-2 bg-primary-500 text-white rounded-md hover:bg-primary-600"
          >
            Add Group Member
          </button>
        </div>
      </form>
    </div>
  );
} 